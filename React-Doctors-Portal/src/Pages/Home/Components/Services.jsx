import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeTitle from "./Common/HomeTitle";
import SDCard from "./Common/SDCard";

const Services = () => {
  return (
    <Container>
      <HomeTitle
        className="text-center"
        subTitle="OUR SERVICES"
        Title="Services We Provide"
      />
      {/* Services */}
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        <SDCard
          imgPixel={70}
          cardData={{
            title: "Fluoride Treatment",
            text: "lorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire beta",
            serviceImg: "./images/fluoride.png",
          }}
        />
        <SDCard
          imgPixel={70}
          cardData={{
            title: "Cavity Filling",
            text: "lorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire beta",
            serviceImg: "./images/cavity.png",
          }}
        />
        <SDCard
          imgPixel={70}
          cardData={{
            title: "Teath Whitening",
            text: "lorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire betalorem habi jabi kabi khabi dabi kire beta",
            serviceImg: "./images/whitening.png",
          }}
        />
      </Row>
    </Container>
  );
};

export default Services;
