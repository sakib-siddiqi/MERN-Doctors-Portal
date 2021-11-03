import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => (
  <footer className="py-5">
    <Container>
      <Row sm={2} md={3} lg={4}>
        <Col>
          <h4 className="my-t-dark fw-bold ">DOCTORS PORTAL</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            repellat.
          </p>
        </Col>
        <Col>
          <h5 className="fw-md my-t-primary">Services</h5>
          <Nav.Link className="text-secondary">Emergency Dental Care</Nav.Link>
          <Nav.Link className="text-secondary">
            Treatment of Personal Diseases
          </Nav.Link>
          <Nav.Link className="text-secondary">Tooth Extraction</Nav.Link>
          <Nav.Link className="text-secondary">Check Up</Nav.Link>
        </Col>
        <Col>
          <h5 className="fw-md my-t-primary">Oral Health</h5>
          <Nav.Link className="text-secondary">Emergency Dental Care</Nav.Link>
          <Nav.Link className="text-secondary">
            Treatment of Personal Diseases
          </Nav.Link>
          <Nav.Link className="text-secondary">Tooth Extraction</Nav.Link>
          <Nav.Link className="text-secondary">Check Up</Nav.Link>
        </Col>
        <Col>
          <h5 className="fw-md my-t-primary">Our Address</h5>
          <p className="text-muted fw-md mb-0">New York - 101010 Hudson</p>
          <p className="text-muted fw-md">Yards</p>
          <Row xs={6}>
            <Col>
              <BsFacebook className="h3 my-t-primary" />
            </Col>
            <Col>
              <AiFillGooglePlusCircle className="h3 my-t-primary" />
            </Col>
            <Col>
              <AiFillTwitterCircle className="h3 my-t-primary" />
            </Col>
          </Row>
          <div className="mt-3">
            <p className="text-muted fw-bold mb-1">Call Now</p>
            <button className="btn btn-primary">+12124523</button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
