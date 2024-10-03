import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./AppointmentCalendar.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/pl";

dayjs.locale("pl");

const AppointmentCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const disableWeekDays = ({ date }) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className={classes.appointmentCalendar}>
      <h2 className={classes.appointmentCalendar__h2}>
        Wybierz termin spotkania
      </h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        locale="pl-PL"
        tileDisabled={disableWeekDays}
      />
      <p>Wybrany termin: {dayjs(date).format("dddd, D MMMM YYYY")}</p>
    </div>
  );
};

export default AppointmentCalendar;
