import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardOverview from "./DashboardOverview";
import TableAppointments from "./TableAppointments";

const DashBoard = () => {
  return (
    <Container>
      <h5 className="fw-sm">DashBoard</h5>
      <Row xs={1} className="g-4">
        <Col>
          <DashboardOverview />
        </Col>
        <Col>
          <TableAppointments />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
