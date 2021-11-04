import React, { useState } from "react";
import AppointMentHeader from "./AppointMentHeader";

const Appointment = () => {
  // date
  const [appointmentDate, setAppointmentDate] = useState();
  const handleAppointmentDate = (date) => setAppointmentDate(date);
  return (
    <div>
      <AppointMentHeader dateHandler={handleAppointmentDate} />
      <h1>{appointmentDate}</h1>
    </div>
  );
};

export default Appointment;
