import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";
import HomeTitle from "../Common/HomeTitle";

const ContactUs = () => {
  return (
    <Section
      id="ContactUs"
      className="py-5 v-center justify-content-evenly align-items-center"
    >
      <HomeTitle
        className="text-center mb-5"
        subTitle="CONTACT US"
        Title="Always Connect with us"
        title_class="text-white"
      />
      <Container>
        <Row className="justify-content-center">
          <Col xs={9} className="text-center">
            <form>
              <input
                className="form-control mb-4 p-3"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <input
                className="form-control mb-4 p-3"
                type="tel"
                name="telephone"
                placeholder="Your Phone number"
              />
              <textarea
                className="form-control mb-4 p-3"
                name="message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactUs;
