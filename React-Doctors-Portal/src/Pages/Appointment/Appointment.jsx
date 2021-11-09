import React, { useState } from "react";
import Page from "../../Shared/Page";
import AppointMentHeader from "./AppointMentHeader";
import AvailableAppointmnet from "./AvailableAppointmnet";

const Appointment = () => {
  // date
  const [appointmentDate, setAppointmentDate] = useState();
  const handleAppointmentDate = (date) => {
    setAppointmentDate(date);
  };
  console.log(appointmentDate);
  return (
    <Page id="pageAppointment">
      <AppointMentHeader
        dateHandler={handleAppointmentDate}
        appointmentDate={appointmentDate}
      />
      <AvailableAppointmnet appointmnetDate={appointmentDate} />
    </Page>
  );
};

export default Appointment;
