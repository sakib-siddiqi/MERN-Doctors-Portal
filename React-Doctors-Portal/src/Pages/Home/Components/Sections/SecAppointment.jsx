import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";
const SecAppointment = () => {
  return (
    <Section id="appointment" className="pt-4">
      <Container>
        <Row
          xs={1}
          className="justify-content-around flex-column-reverse flex-md-row"
        >
          <Col md={4}>
            <img
              src="./images/doctor.png"
              alt="doctor-appinment"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="v-center">
            <h5 className="my-t-primary fw-md">APPOINTMENT</h5>
            <h1 className="display-5 text-light fw-md">
              Make an appointment Today
            </h1>
            <p className="text-white mb-3">
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SecAppointment;
