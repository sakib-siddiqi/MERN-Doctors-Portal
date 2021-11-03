import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";
import HomeTitle from "../Common/HomeTitle";
import { BsArrowRight } from "react-icons/bs";
import BlogPost from "./BlogPost";

const Blogs = () => {
  return (
    <Section id="Blogs">
      <Container>
        <HomeTitle
          className="text-center"
          subTitle="OUR BLOGS"
          Title="From Our Blog News"
        />
        <Row xs={1} md={2} lg={4} className="g-4 mt-5">
          <Col>
            <Card className="bg-quote-img">
              <Card.Body className="w-100 my-bg a-r-1 v-center rounded-3">
                <h2 className="text-white fw-md">Read Blogs</h2>
                <p className="text-white fw-md">By Doctors</p>
                <BsArrowRight className="h1 text-white" />
              </Card.Body>
            </Card>
          </Col>
          {/**
           *Blogs
           * */}
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </Row>
      </Container>
    </Section>
  );
};

export default Blogs;
