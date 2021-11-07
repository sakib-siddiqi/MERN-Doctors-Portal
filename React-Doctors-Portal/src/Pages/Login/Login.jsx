import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Page from "../../Shared/Page";
import Section from "../../Shared/Section";

const Login = () => {
  const { firebase, handleSignIn } = useFirebase();
  const [formError, setFormError] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (loginFormData.email && loginFormData.password) {
      handleSignIn(loginFormData);
      setFormError("");
      setLoginFormData({
        email: "",
        password: "",
      });
      setFormError("");
    } else {
      setFormError("Can't Submit. Check All Fuilds.");
    }
  }
  return (
    <Page>
      <Section id="Login-signup">
        <Container>
          <Row className="vh-min-100 v-center">
            <Col xs={12} md={4} className="text-center bg-white shadow p-4">
              <div className="mb-4">
                <h4 className="my-t-primary fw-md">DOCTORS PORTAL</h4>
                <h5 className="my-t-dark fw-md">Login</h5>
              </div>
              <form className=" text-start" onSubmit={handleSubmit}>
                <label htmlFor="email" className="form-label w-100">
                  <p>Email</p>
                  <input
                    type="email"
                    name="emial"
                    id="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    value={loginFormData.email}
                    onChange={(e) =>
                      setLoginFormData({
                        ...loginFormData,
                        email: e.target.value,
                      })
                    }
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
                    value={loginFormData.password}
                    onChange={(e) =>
                      setLoginFormData({
                        ...loginFormData,
                        password: e.target.value,
                      })
                    }
                  />
                </label>
                {formError && <p className="text-danger mb-3">* {formError}</p>}
                {firebase.error && (
                  <p className="text-danger mb-3">* {firebase.error}</p>
                )}
                <p className="text-danger">Forget password ?</p>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <Link
                  to="/signup"
                  className="nav-link p-0 mb-2 mt-3 text-primary"
                >
                  Don't have an account?
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default Login;
