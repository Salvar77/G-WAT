import { google } from "googleapis";
import { promises as fs } from "fs";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { session_id } = await req.json();

    // Pobierz dane sesji Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const { name, email, date } = session.metadata;

    // Sprawdzamy czy dane są poprawnie odczytane
    console.log("Dane z sesji Stripe (przed konwersją):", date);

    // Walidacja i konwersja daty do formatu ISO 8601
    let isoDate;
    if (!date || !Date.parse(date)) {
      throw new Error("Nieprawidłowy format daty");
    } else {
      isoDate = new Date(date).toISOString(); // Konwertujemy na format ISO 8601
    }

    console.log("Data po konwersji do formatu ISO 8601:", isoDate);

    // Pobierz ścieżkę do pliku JSON z kontem serwisowym
    const serviceAccountKeyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
    const serviceAccountKey = JSON.parse(
      await fs.readFile(serviceAccountKeyPath, "utf-8")
    );

    console.log("Pobrano klucz konta serwisowego z:", serviceAccountKeyPath);

    // Inicjalizacja Google API z użyciem konta serwisowego
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Tworzenie obiektu wydarzenia z prawidłowo sformatowaną datą
    const event = {
      summary: `Spotkanie z ${name}`,
      location: "Online",
      description: `Spotkanie z klientem ${name} (${email})`,
      start: {
        dateTime: isoDate, // Przekazujemy datę w formacie ISO 8601
        timeZone: "Europe/Warsaw",
      },
      end: {
        dateTime: new Date(
          new Date(isoDate).getTime() + 60 * 60 * 1000
        ).toISOString(), // 1 godzina spotkania
        timeZone: "Europe/Warsaw",
      },
    };

    console.log("Obiekt wydarzenia:", event);

    // Dodanie wydarzenia do Google Calendar
    const response = await calendar.events.insert({
      calendarId: "lukaszkus77@gmail.com",
      resource: event,
    });

    console.log("Wydarzenie dodane do kalendarza:", response.data);
    return new Response(JSON.stringify({ eventLink: response.data.htmlLink }), {
      status: 200,
    });
  } catch (error) {
    // Bardziej szczegółowe logowanie błędu
    console.error(
      "Błąd szczegółowy:",
      error.response ? error.response.data : error
    );
    return new Response(
      JSON.stringify({
        error: "Błąd podczas dodawania wydarzenia do kalendarza",
      }),
      {
        status: 500,
      }
    );
  }
}

// // Funkcja POST obsługująca dodawanie wydarzenia
// export async function POST(req) {
//   try {
//     // Odczyt danych z żądania (date i formData)
//     const { date, formData } = await req.json();

//     // Inicjalizacja OAuth2 z Google, używając danych z .env
//     const oAuth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET
//     );

//     // Ustawienie Access Tokena i Refresh Tokena z pliku .env
//     oAuth2Client.setCredentials({
//       access_token: process.env.GOOGLE_ACCESS_TOKEN,
//       refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     });

//     // Zarejestruj event do odświeżania tokenów, gdy Access Token wygaśnie
//     oAuth2Client.on("tokens", (tokens) => {
//       if (tokens.refresh_token) {
//         console.log("Zaktualizowano Refresh Token:", tokens.refresh_token);
//       }
//       console.log("Zaktualizowano Access Token:", tokens.access_token);
//     });

//     // Inicjalizacja klienta Google Calendar
//     const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

//     // Definiowanie wydarzenia
//     const event = {
//       summary: `Spotkanie z ${formData.name}`,
//       location: "Online",
//       description: `Spotkanie z klientem ${formData.name} (${formData.email})`,
//       start: {
//         dateTime: date,
//         timeZone: "Europe/Warsaw",
//       },
//       end: {
//         dateTime: new Date(
//           new Date(date).getTime() + 60 * 60 * 1000
//         ).toISOString(), // 1 godzina spotkania
//         timeZone: "Europe/Warsaw",
//       },
//     };

//     // Dodawanie wydarzenia do kalendarza właściciela
//     const response = await calendar.events.insert({
//       calendarId: "primary", // Główny kalendarz właściciela
//       resource: event,
//     });

//     // Zwracamy link do dodanego wydarzenia
//     return new Response(JSON.stringify({ eventLink: response.data.htmlLink }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Błąd podczas dodawania wydarzenia do kalendarza:", error);
//     return new Response(
//       JSON.stringify({
//         error: "Błąd podczas dodawania wydarzenia do kalendarza",
//       }),
//       { status: 500 }
//     );
//   }
// }