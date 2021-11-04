import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerimg from "../../../../Images/chair.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header id="Header">
      <Container>
        <Row xs={1} className="vh-min-100">
          <Col
            md={5}
            className="v-center align-items-center align-items-md-start text-center text-md-start"
          >
            <h1 className="fw-bold display-3 my-t-dark lh-sm mb-3">
              Your New Smile
              <br />
              Starts Here
            </h1>
            <p className="text-muted lh-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the
            </p>
            <NavLink to="/appointment" className="btn btn-primary btn-lg">
              Get appointment
            </NavLink>
          </Col>
          <Col md={7} className="h-center justify-content-end">
            <img src={headerimg} alt="header-img" className="w-75" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
