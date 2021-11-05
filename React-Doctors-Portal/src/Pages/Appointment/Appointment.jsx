import React, { useState } from "react";
import AppointMentHeader from "./AppointMentHeader";
import AvailableAppointmnet from "./AvailableAppointmnet";

const Appointment = () => {
  // date
  const [appointmentDate, setAppointmentDate] = useState();
  const handleAppointmentDate = (date) => {
    setAppointmentDate(date);
  };
  return (
    <page id="pageAppointment">
      <AppointMentHeader
        dateHandler={handleAppointmentDate}
        appointmentDate={appointmentDate}
      />
      <AvailableAppointmnet appointmnetDate={appointmentDate} />
    </page>
  );
};

export default Appointment;
