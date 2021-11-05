import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MyCalender from "../../../Shared/Calendar/MyCalendar";
import Section from "../../../Shared/Section";

const DashAppointment = () => {
  // date
  const [appointmentDate, setAppointmentDate] = useState();
  const handleAppointmentDate = (date) => {
    setAppointmentDate(date);
  };
  return (
    <Section>
      <Row xs={1}>
        <Col className="text center" md={4}>
          <h4>{appointmentDate}</h4>
          <MyCalender dateHandler={handleAppointmentDate} />
        </Col>
        <Col md={8}>
          <Card.Body className="p-3 shadow-sm bg-white rounded-3">
            <h5 className="text-primary">{appointmentDate}</h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Col>
      </Row>
    </Section>
  );
};

export default DashAppointment;
