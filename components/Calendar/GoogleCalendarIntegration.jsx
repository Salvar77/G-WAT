"use client";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";

const GoogleCalendarIntegration = ({ date, formData }) => {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initClient = () => {
        gapi.client
          .init({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, // Google Client ID
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
            scope: "https://www.googleapis.com/auth/calendar.events", // Zakres uprawnień
          })
          .then(() => {
            console.log("Google API client initialized successfully");
            setIsAuthInitialized(true); // Oznaczamy, że autoryzacja jest zainicjalizowana
          })
          .catch((error) => {
            console.error("Error initializing Google API client:", error);
          });
      };

      gapi.load("client:auth2", initClient);
    }
  }, []);

  const addEventToGoogleCalendar = () => {
    if (typeof window !== "undefined" && isAuthInitialized) {
      const authInstance = gapi.auth2.getAuthInstance();

      // Sprawdzamy, czy instancja autoryzacji jest dostępna
      if (authInstance && authInstance.isSignedIn.get()) {
        const event = {
          summary: `Spotkanie z ${formData.name}`,
          location: "Online",
          description: `Spotkanie umówione z klientem ${formData.name} (${formData.email})\nNumer telefonu: ${formData.phone}`,
          start: {
            dateTime: date.toISOString(),
            timeZone: "Europe/Warsaw",
          },
          end: {
            dateTime: new Date(date.getTime() + 60 * 60 * 1000).toISOString(), // 1 godzina spotkania
            timeZone: "Europe/Warsaw",
          },
        };

        // Dodanie wydarzenia do kalendarza
        gapi.client.calendar.events
          .insert({
            calendarId: "primary",
            resource: event,
          })
          .then((response) => {
            console.log("Event created successfully:", response); // Logowanie odpowiedzi
            alert(
              imieninydz`Wydarzenie zostało dodane do kalendarza: ${response.result.htmlLink}`
            );
          })
          .catch((error) => {
            console.error(
              "Błąd podczas dodawania wydarzenia do kalendarza:",
              error
            ); // Logowanie błędów
            alert("Wystąpił błąd podczas dodawania wydarzenia do kalendarza.");
          });
      } else {
        console.error(
          "User is not signed in or authInstance is not available."
        );
        alert("Musisz się zalogować, aby dodać wydarzenie do kalendarza.");
      }
    }
  };

  return (
    <button onClick={addEventToGoogleCalendar} disabled={!isAuthInitialized}>
      Dodaj do Google Kalendarza
    </button>
  );
};

export default GoogleCalendarIntegration;
