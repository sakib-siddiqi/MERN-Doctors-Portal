import React, { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Loading from "../../Shared/Components/Loading";
import Page from "../../Shared/Page";
import Section from "../../Shared/Section";

const SignUp = () => {
  const location = useLocation();
  const history = useHistory();
  const fromPath = location.state?.from?.pathname;

  const { firebase, handleSignUp, handleSignOut } = useFirebase();
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      handleSignUp(formData, () => {
        history.push(fromPath || "/");
      });
      setFormError("");
      setFormData({
        name: "",
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
            <Col
              xs={12}
              md={4}
              className="text-center bg-white shadow pt-4 pb-2 px-3 rounded-3"
            >
              {firebase.loading ? (
                <Card className="border-primary">
                  <Card.Body className="v-center h-center a-r-1">
                    <Loading />
                  </Card.Body>
                </Card>
              ) : firebase.user.uid ? (
                <Card className="mb-2 border-primary">
                  <Card.Body>
                    <h4 className="bg-primary p-2 rounded-3 mb-3 shadow text-light">
                      {firebase.user.displayName}
                    </h4>
                    <p className="bg-primary mb-3 p-2 mb-0 rounded-3 shadow text-light">
                      {firebase.user.email}
                    </p>
                    <Button variant="danger" onClick={handleSignOut}>
                      Logout
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                <>
                  <div className="mb-4">
                    <h4 className="my-t-primary fw-md">DOCTORS PORTAL</h4>
                    <h5 className="my-t-dark fw-md">Signup</h5>
                  </div>
                  <form
                    className=" text-start"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <label htmlFor="name" className="form-label w-100">
                      <p>Your Name</p>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="form-control mb-3"
                        value={formData.name}
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
                        value={formData.email}
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
                        minLength="8"
                        placeholder="Password"
                        className="form-control mb-3"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </label>
                    {formError && (
                      <p className="text-danger mb-3">* {formError}</p>
                    )}
                    {firebase.error && (
                      <p className="text-danger mb-3">* {firebase.error}</p>
                    )}
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
                </>
              )}{" "}
            </Col>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default SignUp;
