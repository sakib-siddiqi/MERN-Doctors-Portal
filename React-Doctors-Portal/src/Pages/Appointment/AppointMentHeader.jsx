import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Shared/Section";
import MyCalendar from "../../Shared/Calendar/MyCalendar";
import chariPng from "../../Images/chair.png";
const AppointMentHeader = ({ dateHandler, displayDate }) => {
  return (
    <Section id="AppointmentHeader">
      <Container>
        <Row xs={1} md={2} className="vh-min-100">
          <Col className="v-center">
            <h1 className="display-5 fw-bold my-t-dark mb-5">APPOINTMENT</h1>
            <h5 className="fw-md my-t-primary">{displayDate}</h5>
            <MyCalendar dateHandler={dateHandler} />
          </Col>
          <Col className="v-center">
            <img
              src={chariPng}
              alt="appointment header img"
              className="img-fluid "
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default AppointMentHeader;
