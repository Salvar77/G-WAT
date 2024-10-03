import { google } from "googleapis";

// Pobieranie poświadczeń z pliku lub zmiennych środowiskowych
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY), // użycie klucza z ENV
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const calendar = google.calendar({ version: "v3", auth });

      const { summary, location, description, startTime, endTime } = req.body;

      // 1. Pobranie wydarzeń z tego samego dnia
      const events = await calendar.events.list({
        calendarId: "primary",
        timeMin: startTime, // Ustal początek zakresu czasowego od początku wybranego dnia
        timeMax: endTime, // Ustal koniec zakresu czasowego do końca wybranego dnia
        singleEvents: true, // Rozbicie wydarzeń na pojedyncze eventy
        orderBy: "startTime", // Posortowane po czasie rozpoczęcia
      });

      // 2. Sprawdzenie, czy wybrany czas jest wolny
      const conflictingEvent = events.data.items.find((event) => {
        const eventStart = new Date(event.start.dateTime);
        const eventEnd = new Date(event.end.dateTime);

        // Sprawdź, czy nowe wydarzenie nachodzi na istniejące
        return new Date(startTime) < eventEnd && new Date(endTime) > eventStart;
      });

      if (conflictingEvent) {
        return res.status(400).json({
          message: "Termin jest już zarezerwowany.",
          conflictingEvent,
        });
      }

      // 3. Dodanie nowego wydarzenia, jeśli nie ma konfliktu
      const event = {
        summary,
        location,
        description,
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
        calendarId: "primary",
        resource: event,
      });

      res.status(200).json({
        message: "Wydarzenie zostało utworzone",
        event: response.data,
      });
    } catch (error) {
      console.error("Błąd podczas dodawania wydarzenia:", error);
      res
        .status(500)
        .json({ message: "Wystąpił błąd podczas tworzenia wydarzenia" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `Metoda ${req.method} nie jest dozwolona` });
  }
}
