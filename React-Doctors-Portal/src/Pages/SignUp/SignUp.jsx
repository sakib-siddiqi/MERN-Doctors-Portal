import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Page from "../../Shared/Page";
import Section from "../../Shared/Section";

const SignUp = () => {
  const { handleSignUp } = useFirebase();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formData);
  function handleSubmit() {}
  return (
    <Page>
      <Section id="Login-signup">
        <Container>
          <Row className="vh-min-100 v-center">
            <Col
              xs={12}
              md={4}
              className="text-center bg-white shadow pt-4 pb-2 px-3 rounded-3"
            >
              <div className="mb-4">
                <h4 className="my-t-primary fw-md">DOCTORS PORTAL</h4>
                <h5 className="my-t-dark fw-md">Signup</h5>
              </div>
              <form className=" text-start" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label w-100">
                  <p>Your Name</p>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="form-control mb-3"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="email" className="form-label w-100">
                  <p>Email</p>
                  <input
                    type="email"
                    name="emial"
                    id="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
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
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
                <Link
                  to="/login"
                  className="nav-link p-0 mb-2 mt-3 text-primary"
                >
                  Have an account?
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default SignUp;
