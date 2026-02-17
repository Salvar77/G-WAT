// import Stripe from "stripe";
import { google } from "googleapis";
import { promises as fs } from "fs";
import nodemailer from "nodemailer";

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  // const buf = await req.text(); // Odczytujemy ciało jako tekst (bez parsowania JSON)
  // const sig = req.headers.get("stripe-signature");

  const { name, email, phone, selectedDate } = await req.json(); // Załóżmy, że otrzymujemy te dane bezpośrednio z frontendu

  // try {
  // Weryfikacja zdarzenia Stripe za pomocą klucza webhook
  // const stripeEvent = stripe.webhooks.constructEvent(
  //   buf,
  //   sig,
  //   process.env.STRIPE_WEBHOOK_SECRET
  // );

  // if (stripeEvent.type === "payment_intent.succeeded") {
  //   const paymentIntent = stripeEvent.data.object;

  if (!name || !email || !phone || !selectedDate) {
    console.error("Brakujące dane w metadanych:", {
      name,
      email,
      phone,
      selectedDate,
    });
    return new Response("Brakujące dane w metadanych", { status: 400 });
  }

  // let serviceAccountKey;
  // if (process.env.NODE_ENV === "production") {
  //   console.log(
  //     "GOOGLE_SERVICE_ACCOUNT_KEY:",
  //     process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  //   );
  //   // W produkcji użyj zmiennej środowiskowej jako stringa
  //   serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  // } else {
  //   // W lokalnym środowisku wczytaj z pliku
  //   const serviceAccountKeyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
  //   serviceAccountKey = JSON.parse(
  //     await fs.readFile(serviceAccountKeyPath, "utf-8")
  //   );
  // }

  // Użycie klucza z ENV
  let serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    : JSON.parse(
        await fs.readFile(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH, "utf-8")
      );

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  // 1. Pobieranie istniejących wydarzeń z Google Calendar dla danego dnia
  const startTime = new Date(selectedDate).toISOString();
  const endTime = new Date(
    new Date(selectedDate).getTime() + 60 * 60 * 1000
  ).toISOString();

  const events = await calendar.events.list({
    calendarId: process.env.EMAIL_USER,
    timeMin: startTime,
    timeMax: endTime,
    singleEvents: true,
    orderBy: "startTime",
  });

  const conflictingEvent = events.data.items.find((event) => {
    const eventStart = new Date(event.start.dateTime);
    const eventEnd = new Date(event.end.dateTime);
    return new Date(startTime) < eventEnd && new Date(endTime) > eventStart;
  });

  // 2. Sprawdzenie czy istnieje konflikt w czasie
  if (conflictingEvent) {
    return new Response(
      JSON.stringify({
        message: "Termin jest już zarezerwowany.",
        conflictingEvent,
      }),
      { status: 400 }
    );
  }

  // 3. Dodanie wydarzenia, jeśli termin jest dostępny
  const event = {
    summary: `Spotkanie z ${name}`,
    location: "Online",
    description: `Spotkanie z klientem ${name} (${email})\nNumer telefonu: ${phone}`,
    start: {
      dateTime: startTime,
      timeZone: "Europe/Warsaw",
    },
    end: {
      dateTime: endTime,
      timeZone: "Europe/Warsaw",
    },
  };

  const response = await calendar.events.insert({
    calendarId: process.env.EMAIL_USER,
    resource: event,
  });

  console.log("Odpowiedź z Google Calendar:", response.data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  const formattedDate = new Date(selectedDate).toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const mailOptionsClient = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Potwierdzenie rezerwacji spotkania",
    text: `Dziękujemy za rezerwację na dzień ${formattedDate}. Czekamy na spotkanie.`,
  };

  const mailOptionsOwner = {
    from: process.env.GMAIL_USER,
    to: process.env.OWNER_EMAIL,
    subject: "Nowa rezerwacja spotkania",
    text: `Nowa rezerwacja spotkania od ${name} (${email}, ${phone}) na dzień ${formattedDate}.`,
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.error("Błąd przy łączeniu z serwerem SMTP Gmail:", error);
    } else {
      console.log("Połączenie z serwerem SMTP Gmail działa prawidłowo");
    }
  });

  try {
    await transporter.sendMail(mailOptionsClient);
    console.log("Email do klienta wysłany");
  } catch (error) {
    console.error("Błąd przy wysyłaniu emaila do klienta:", error);
    return new Response("Błąd przy wysyłaniu emaila do klienta", {
      status: 500,
    });
  }

  try {
    await transporter.sendMail(mailOptionsOwner);
    console.log("Email do właściciela wysłany");
  } catch (error) {
    console.error("Błąd przy wysyłaniu emaila do właściciela:", error);
    return new Response("Błąd przy wysyłaniu emaila do właściciela", {
      status: 500,
    });
  }

  return new Response(
    JSON.stringify({ message: "Rezerwacja udana", event: response.data }),
    { status: 200 }
  );
};
