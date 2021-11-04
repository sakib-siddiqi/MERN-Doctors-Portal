import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const MyNavbar = () => (
  <Navbar expand="lg" className="fixed-top glass-bg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="./logo.png"
          width="35"
          className="d-inline-block align-top shadow-sm"
          alt="doctors portal logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <BiMenuAltRight />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/aental-services">
            Dental Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/reviews">
            Reviews
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blogs">
            Blogs
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact-us">
            Contact Us
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/login"
            className="btn btn-primary text-light px-3"
          >
            <small> Login</small>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
