import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Page from "../../Shared/Page";
import Section from "../../Shared/Section";

const Login = () => {
  return (
    <Page>
      <Section id="Login">
        <Container>
          <Row className="vh-min-100 v-center">
            <Col xs={12} md={4} className="text-center bg-white shadow p-4">
              <div className="mb-4">
                <h4 className="my-t-primary fw-md">DOCTORS PORTAL</h4>
                <h5 className="my-t-dark fw-md">Login</h5>
              </div>
              <form className=" text-start">
                <label htmlFor="email" className="form-label w-100">
                  <p>Email</p>
                  <input
                    type="email"
                    name="emial"
                    id="email"
                    placeholder="Email"
                    className="form-control mb-3"
                  />
                </label>
                <label htmlFor="password" className="form-label w-100">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control mb-3"
                  />
                </label>
                <p className="text-danger">Forget password ?</p>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default Login;
