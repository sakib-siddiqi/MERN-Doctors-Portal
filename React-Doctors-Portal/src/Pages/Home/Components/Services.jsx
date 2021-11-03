import React from "react";
import { Container, Row } from "react-bootstrap";
import Section from "../../../Shared/Section";
import HomeTitle from "./Common/HomeTitle";
import SDCard from "./Common/SDCard";

const Services = () => {
  return (
    <Section id="Services">
      <Container>
        <HomeTitle
          className="text-center"
          subTitle="OUR SERVICES"
          Title="Services We Provide"
        />
        {/* Services */}
        <Row className="g-4 mt-4 justify-content-around">
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
    </Section>
  );
};

export default Services;
