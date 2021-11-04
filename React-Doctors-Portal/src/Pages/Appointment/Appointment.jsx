import React, { useState } from "react";
import AppointMentHeader from "./AppointMentHeader";
import AvailableAppointmnet from "./AvailableAppointmnet";

const Appointment = () => {
  // date
  const [appointmentDate, setAppointmentDate] = useState();
  const handleAppointmentDate = (date) => setAppointmentDate(date);
  return (
    <div>
      <AppointMentHeader dateHandler={handleAppointmentDate} />
      <AvailableAppointmnet appointmnetDate={appointmentDate} />
    </div>
  );
};

export default Appointment;
