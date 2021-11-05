import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const DashOverviewCard = ({ variant, title, count, status }) => {
  return (
    <Card.Body
      className={`bg-${variant} text-white shadow-sm`}
      style={{ borderRadius: "8px" }}
    >
      <Row sm={1}>
        <Col md={4} className="center">
          <h1 className="fw-md m-0">{count}</h1>
        </Col>
        <Col md={8} className="center align-items-center align-items-md-start">
          <h6 className="mb-1 fw-sm">{status}</h6>
          <small className="mb-0">{title}</small>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default DashOverviewCard;
