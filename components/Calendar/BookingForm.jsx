import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./BookingForm.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { useRouter } from "next/navigation";
dayjs.locale("pl");

const BookingForm = ({ selectedDate }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [disabledTimes, setDisabledTimes] = useState([]);

  // const minTime = dayjs().hour(9).minute(0);
  // const maxTime = dayjs().hour(17).minute(0);

  // Pobierz zajęte godziny z Google Calendar po wybraniu daty
  useEffect(() => {
    if (selectedDate) {
      fetch(
        `/api/fetchEvents?startDate=${selectedDate}&endDate=${selectedDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          const bookedTimes = data.events.map((event) => ({
            start: dayjs(event.start.dateTime),
            end: dayjs(event.end.dateTime),
          }));
          setDisabledTimes(bookedTimes);
        })
        .catch((error) => {
          console.error("Błąd podczas pobierania wydarzeń:", error);
        });
    }
  }, [selectedDate]);

  const shouldDisableTime = (time, view) => {
    // Sprawdzamy czy godzina lub minuta jest zablokowana
    return disabledTimes.some(({ start, end }) => {
      if (view === "hours") {
        return time.isBetween(start, end, "hour", "[)");
      }
      if (view === "minutes") {
        return time.isBetween(start, end, "minute", "[)");
      }
      return false;
    });
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime); // Nie blokujemy tutaj wybranej godziny, tylko w pickerze
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || isNaN(new Date(selectedDate).getTime())) {
      alert("Wybrano nieprawidłową datę.");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Proszę uzupełnić wszystkie pola.");
      return;
    }

    const fullDate = new Date(selectedDate);
    fullDate.setHours(selectedTime.hour());
    fullDate.setMinutes(selectedTime.minute());

    try {
      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedDate: fullDate.toISOString(),
        }),
      });

      if (response.ok) {
        router.push("/sukces");
      } else {
        const error = await response.json();
        alert("Wystąpił błąd: " + error.message);
      }
    } catch (error) {
      console.error("Błąd podczas dodawania wydarzenia:", error);
      alert("Wystąpił błąd podczas dodawania wydarzenia.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h3>
        Rezerwacja na dzień: {dayjs(selectedDate).format("dddd, D MMMM YYYY")}
      </h3>

      <div>
        <label>Imię:</label>
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>

      <div>
        <label>Email:</label>
        <TextField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>

      <div>
        <label>Numer Kontaktowy:</label>
        <TextField
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>

      <div className={classes.timePickerContainer}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Wybierz godzinę"
            value={selectedTime}
            onChange={handleTimeChange}
            ampm={false}
            // minTime={minTime}
            // maxTime={maxTime}
            minutesStep={30}
            shouldDisableTime={shouldDisableTime}
          />
        </LocalizationProvider>
      </div>

      <Button type="submit" variant="contained" color="primary">
        ZAREZERWUJ SWÓJ TERMIN
      </Button>
    </form>
  );
};

export default BookingForm;
