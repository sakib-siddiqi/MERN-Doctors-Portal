import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ClientSays = () => {
  return (
    <Col>
      <Card className="border-0 card-shadow">
        <Card.Body>
          <p className="text-muted mb-5">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using ‘Content here, content
          </p>
          <Row className="w-100">
            <Col xs={3}>
              <img
                src="./images/people-1.png"
                alt="people"
                className="img-fluid rounded-pill"
              />
            </Col>
            <Col xs={9}>
              <p className="fw-md my-t-primary m-0">Sakib Siddiqi</p>
              <small className="fw-sm text-muted m-0">2 / 3 / 21</small>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ClientSays;
