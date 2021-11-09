import React, { useState } from "react";
import Page from "../../Shared/Page";
import AppointMentHeader from "./AppointMentHeader";
import AvailableAppointmnet from "./AvailableAppointmnet";
// date
const date = new Date();
const defaultValue = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
};
const Appointment = () => {
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  // dateHandler
  const handleAppointmentDate = () => setSelectedDay;
  console.log(selectedDay);
  const date = new Date(selectedDay.year, selectedDay.month, selectedDay.day);
  return (
    <Page id="pageAppointment">
      <AppointMentHeader
        selectedDay={selectedDay}
        dateHandler={handleAppointmentDate}
        appointmentDate={date}
      />
      <AvailableAppointmnet appointmnetDate={date} />
    </Page>
  );
};

export default Appointment;
