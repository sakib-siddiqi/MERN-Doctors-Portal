import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";

const FeateredService = () => {
  return (
    <Section id="featuredService">
      <Container>
        <Row xs={1} className="g-4 justify-content-around">
          <Col md={4} className="h-center">
            <img
              src="./images/treatment.png"
              alt="featured-service-img"
              className="img-fluid rounded-1"
            />
          </Col>
          <Col md={5} className="v-center">
            <h1 className="display-5 fw-md my-t-dark lh-base">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="text-muted lh-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using ‘Content here, content
              here’, making it look like readable English. Many desktop
              publishing packages and web page{" "}
            </p>
            <button className="btn btn-primary">Learn More</button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default FeateredService;
