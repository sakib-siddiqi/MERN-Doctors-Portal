import React from "react";
import { Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";
import HomeTitle from "../Common/HomeTitle";
import ClientSays from "./ClientSays";

const Testimonial = () => {
  return (
    <Section id="Blogs" className="sec-bg-quote-img">
      <Container>
        <HomeTitle
          subTitle="TESTIMONIAL"
          Title="What’s Our Patients
Says"
        />
        <Row xs={1} md={2} lg={4} className="g-4 mt-5">
          <ClientSays />
          <ClientSays />
          <ClientSays />
          <ClientSays />
        </Row>
      </Container>
    </Section>
  );
};

export default Testimonial;
