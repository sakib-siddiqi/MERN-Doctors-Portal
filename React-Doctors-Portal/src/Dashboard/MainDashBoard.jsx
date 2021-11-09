import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import DashBoardMenu from "./DashBoardMenu";
import DashBoard from "./Dash.Pages/Dashboard/DashBoard";
import DashAppointment from "./Dash.Pages/DashAppointmnet/DashAppointment";
import DashPatients from "./Dash.Pages/DashPatients";
import DashPrescriptions from "./Dash.Pages/DashPrescriptions";
import { VscSignOut } from "react-icons/vsc";

const MainDashBoard = () => {
  return (
    <section>
      <Container fluid style={{ background: "#f4fdfb" }}>
        <Row className="vh-100 ">
          <Col
            xs={2}
            className="bg-primary text-white p-3 d-flex justify-content-between flex-column"
          >
            <div>
              <DashBoardMenu />
            </div>
            <Nav.Item className="shadow-sm p-2 rounded-3 text-center bg-danger">
              <span className="d-none d-md-inline-block">Logout</span>
              <VscSignOut className="ms-0 ms-md-2" />
            </Nav.Item>
          </Col>
          <Col xs={10}>
            <Switch>
              <Route exact path="/dashboard" component={DashBoard} />
              <Route
                path="/dashboard/appointment"
                component={DashAppointment}
              />
              <Route path="/dashboard/patients" component={DashPatients} />
              <Route
                path="/dashboard/prescriptions"
                component={DashPrescriptions}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainDashBoard;
