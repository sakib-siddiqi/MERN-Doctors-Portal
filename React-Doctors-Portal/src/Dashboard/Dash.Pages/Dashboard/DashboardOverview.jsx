import React from "react";
import { Row, Col } from "react-bootstrap";
import DashOverviewCard from "./DashOverviewCard";
const DashboardOverview = () => {
  return (
    <Row xs={2} md={3} lg={4} className="g-3">
      <Col>
        <DashOverviewCard
          variant="my-danger"
          count="09"
          status="Panding"
          title="Appointment"
        />
      </Col>
      <Col>
        <DashOverviewCard
          variant="my-primary"
          count="19"
          status="Today's"
          title="Appointment"
        />
      </Col>
      <Col>
        <DashOverviewCard
          variant="my-success"
          count="34"
          status="Total"
          title="Appointment"
        />
      </Col>
      <Col>
        <DashOverviewCard
          variant="my-warning"
          count="74"
          status="Total"
          title="Patients"
        />
      </Col>
    </Row>
  );
};

export default DashboardOverview;
