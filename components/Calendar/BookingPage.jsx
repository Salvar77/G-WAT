"use client";
import React, { useState } from "react";
import AppointmentCalendar from "./AppointmentCalendar";
import BookingForm from "./BookingForm";
import dynamic from "next/dynamic";
import classes from "./BookingPage.module.scss";

const GoogleCalendarIntegration = dynamic(
  () => import("./GoogleCalendarIntegration"),
  { ssr: false }
);

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState(null);

  return (
    <section id="kalendarz" className={classes.bookingPageContainer}>
      <h2 className={classes.bookingPageContainerH2}>Rezerwacje</h2>
      <div className={classes.contentWrapper}>
        <AppointmentCalendar onDateChange={setSelectedDate} />
        <BookingForm selectedDate={selectedDate} setFormData={setFormData} />
      </div>
      {formData && (
        <GoogleCalendarIntegration date={selectedDate} formData={formData} />
      )}
    </section>
  );
};

export default BookingPage;
