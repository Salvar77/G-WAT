import { google } from "googleapis";
import { promises as fs } from "fs";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!startDate || !endDate) {
    return new Response(
      JSON.stringify({
        message: "Brak wymaganych parametrów: startDate lub endDate",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Użycie klucza z ENV lub pliku w lokalnym środowisku
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

  try {
    const events = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date(startDate).toISOString(),
      timeMax: new Date(endDate).toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    return new Response(JSON.stringify({ events: events.data.items }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new Response(
      JSON.stringify({ message: "Błąd podczas pobierania wydarzeń" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
