import React from "react";
import { Container } from "react-bootstrap";
import Section from "../../Shared/Section";
import Booking from "./Booking";

const AvailableAppointmnet = ({ appointmnetDate }) => {
  return (
    <Section id="AbaiableAppointment" className="my-5">
      <Container>
        <h1 className="my-t-primary text-center fw-md">
          Available Appointments on{" "}
          <span className="my-t-dark">{appointmnetDate?.toDateString()}</span>
        </h1>
        <Booking appointmnetDate={appointmnetDate?.toLocaleDateString()} />
      </Container>
    </Section>
  );
};

export default AvailableAppointmnet;
