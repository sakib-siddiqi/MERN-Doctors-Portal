import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import { BiLogInCircle } from "react-icons/bi";
/**
 * Buttons
 */
const LoginBtn = () => {
  return (
    <Nav.Link
      as={NavLink}
      to="/login"
      className="btn btn-primary text-light px-3"
    >
      <small>Login</small>
    </Nav.Link>
  );
};
const LogOutBtn = ({ userName, ...rest }) => {
  return (
    <div
      className="h-center border border-1 border-secondary rounded-pill ps-1"
      style={{ padding: "0.05rem" }}
    >
      <span className="fw-md my-t-dark py-1 px-2 bg-light rounded-pill shadow-sm">
        {userName}
      </span>
      <Button {...rest} variant="danger" className="rounded-pill ms-1">
        <BiLogInCircle className="fw-bold" />
      </Button>
    </div>
  );
};
/**
 *
 *
 * Main function
 *
 *
 *
 */
const MyNavbar = () => {
  const { firebase, handleSignOut } = useFirebase();
  return (
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
            {firebase.user.uid ? (
              <>
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <LogOutBtn
                  userName={firebase.user?.displayName}
                  onClick={handleSignOut}
                />
              </>
            ) : (
              <LoginBtn />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
