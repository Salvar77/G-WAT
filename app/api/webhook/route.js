import Stripe from "stripe";
import { google } from "googleapis";
import { promises as fs } from "fs";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  const buf = await req.text(); // Odczytujemy ciało jako tekst (bez parsowania JSON)
  const sig = req.headers.get("stripe-signature");

  try {
    // Weryfikacja zdarzenia Stripe za pomocą klucza webhook
    const stripeEvent = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Obsługa zdarzenia, jeśli płatność zakończyła się sukcesem
    if (stripeEvent.type === "payment_intent.succeeded") {
      const paymentIntent = stripeEvent.data.object;

      // Odczytujemy dane z metadanych
      const { name, email, phone, selectedDate } = paymentIntent.metadata;

      // Logowanie metadanych
      console.log("Metadane z płatności:", {
        name,
        email,
        phone,
        selectedDate,
      });

      if (!name || !email || !phone || !selectedDate) {
        console.error("Brakujące dane w metadanych:", {
          name,
          email,
          phone,
          selectedDate,
        });
        return new Response("Brakujące dane w metadanych", { status: 400 });
      }

      // Inicjalizacja Google Calendar
      const serviceAccountKeyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
      const serviceAccountKey = JSON.parse(
        await fs.readFile(serviceAccountKeyPath, "utf-8")
      );

      const auth = new google.auth.GoogleAuth({
        credentials: serviceAccountKey,
        scopes: ["https://www.googleapis.com/auth/calendar"],
      });

      const calendar = google.calendar({ version: "v3", auth });

      // Tworzenie wydarzenia w Google Calendar
      const event = {
        summary: `Spotkanie z ${name}`,
        location: "Online",
        description: `Spotkanie z klientem ${name} (${email})\nNumer telefonu: ${phone}`,
        start: {
          dateTime: new Date(selectedDate).toISOString(),
          timeZone: "Europe/Warsaw",
        },
        end: {
          dateTime: new Date(
            new Date(selectedDate).getTime() + 60 * 60 * 1000
          ).toISOString(), // 1 godzina spotkania
          timeZone: "Europe/Warsaw",
        },
      };

      const response = await calendar.events.insert({
        calendarId: process.env.EMAIL_USER, // Email użytkownika do integracji z Google Calendar
        resource: event,
      });

      console.log("Wydarzenie dodane do kalendarza:", response.data);

      // --- Dodajemy wysyłanie maili za pomocą nodemailer przez Gmail ---
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
        tls: { rejectUnauthorized: false },
      });

      // Konwertowanie daty na bardziej czytelny format
      const formattedDate = new Date(selectedDate).toLocaleString("pl-PL", {
        timeZone: "Europe/Warsaw",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Wiadomość email do klienta
      const mailOptionsClient = {
        from: process.env.GMAIL_USER, // Nadawca emaila (Gmail)
        to: email, // Email klienta
        subject: "Potwierdzenie rezerwacji spotkania",
        text: `Dziękujemy za rezerwację na dzień ${formattedDate}. Czekamy na spotkanie.`,
      };

      // Wiadomość email do właściciela strony
      const mailOptionsOwner = {
        from: process.env.GMAIL_USER, // Nadawca emaila (Gmail)
        to: process.env.OWNER_EMAIL, // Email właściciela strony
        subject: "Nowa rezerwacja spotkania",
        text: `Nowa rezerwacja spotkania od ${name} (${email}, ${phone}) na dzień ${formattedDate}.`,
      };

      // Sprawdzenie połączenia z serwerem SMTP Gmail
      transporter.verify(function (error, success) {
        if (error) {
          console.error("Błąd przy łączeniu z serwerem SMTP Gmail:", error);
        } else {
          console.log("Połączenie z serwerem SMTP Gmail działa prawidłowo");
        }
      });

      // Wyślij email do klienta
      try {
        await transporter.sendMail(mailOptionsClient);
        console.log("Email do klienta wysłany");
      } catch (error) {
        console.error("Błąd przy wysyłaniu emaila do klienta:", error);
        return new Response("Błąd przy wysyłaniu emaila do klienta", {
          status: 500,
        });
      }

      // Wyślij email do właściciela strony
      try {
        await transporter.sendMail(mailOptionsOwner);
        console.log("Email do właściciela wysłany");
      } catch (error) {
        console.error("Błąd przy wysyłaniu emaila do właściciela:", error);
        return new Response("Błąd przy wysyłaniu emaila do właściciela", {
          status: 500,
        });
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err) {
    console.error("Błąd webhooka Stripe:", err);
    return new Response("Webhook Error", { status: 400 });
  }
};