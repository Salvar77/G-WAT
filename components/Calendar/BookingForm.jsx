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
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const minTime = dayjs().hour(9).minute(0);
  const maxTime = dayjs().hour(17).minute(0);

  const isTimeValid = (time) => {
    if (!time) return false;
    return time.isAfter(minTime) && time.isBefore(maxTime);
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Czyszczenie flagi przy odmontowywaniu
  }, []);

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
        if (isMounted) {
          router.push("/sukces");
        }
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
            onChange={setSelectedTime}
            ampm={false}
            minTime={minTime}
            maxTime={maxTime}
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
