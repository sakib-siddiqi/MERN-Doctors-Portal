import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
const BlogPost = () => {
  return (
    <Col>
      <Card className="border-0 hover-primary">
        <Card.Body className="w-100 a-r-1 v-center rounded-3 ">
          <Row className="w-100">
            <Col xs={3}>
              <img
                src="./images/people-1.png"
                alt="people"
                className="img-fluid rounded-pill"
              />
            </Col>
            <Col xs={9}>
              <p className="fw-md my-t-dark m-0">Sakib Siddiqi</p>
              <small className="fw-sm text-muted m-0">2 / 3 / 21</small>
            </Col>
          </Row>
          <div className="mt-3">
            <h4 className="fw-md my-t-primary">Lorem, ipsum.</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              magni obcaecati velit laudantium, itaque rerum?
            </p>
            <BsArrowRight className="h1 text-primary" />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogPost;
