import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./BookingForm.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/pl";
dayjs.locale("pl");

const BookingForm = ({ selectedDate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const minTime = dayjs().hour(9).minute(0);
  const maxTime = dayjs().hour(17).minute(0);

  const isTimeValid = (time) => {
    if (!time) return false;
    return time.isAfter(minTime) && time.isBefore(maxTime);
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

    if (!isTimeValid(selectedTime)) {
      alert("Proszę wybrać godzinę pomiędzy 9:00 a 17:00.");
      return;
    }

    const fullDate = new Date(selectedDate);
    fullDate.setHours(selectedTime.hour());
    fullDate.setMinutes(selectedTime.minute());

    try {
      const response = await fetch("/api/create-checkout-session", {
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

      const session = await response.json();

      if (response.ok) {
        window.location.href = session.url;
      } else {
        alert("Wystąpił błąd podczas tworzenia sesji płatności.");
      }
    } catch (error) {
      console.error("Błąd podczas tworzenia sesji Stripe:", error);
      alert("Wystąpił błąd podczas tworzenia sesji płatności.");
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
        Dokonaj rezerwacji i wpłać zadatek
      </Button>
    </form>
  );
};

export default BookingForm;
