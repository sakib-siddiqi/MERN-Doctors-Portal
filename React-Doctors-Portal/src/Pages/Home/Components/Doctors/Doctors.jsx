import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeTitle from "../Common/HomeTitle";
import SDCard from "../Common/SDCard";

const Doctors = () => {
  return (
    <Container className="mt-5">
      <HomeTitle className="text-center" subTitle="Our Doctors" />
      <Row className="mt-4">
        <SDCard
          imgPercent={100}
          cardData={{
            doctorsImg: "./images/doctor-small.png",
            doctorsContuct: "012121212",
            doctorsName: "korim",
          }}
        />
        <SDCard
          imgPercent={100}
          cardData={{
            doctorsImg: "./images/doctor-small.png",
            doctorsContuct: "012121212",
            doctorsName: "korim",
          }}
        />
        <SDCard
          imgPercent={100}
          cardData={{
            doctorsImg: "./images/doctor-small.png",
            doctorsContuct: "012121212",
            doctorsName: "korim",
          }}
        />
      </Row>
    </Container>
  );
};

export default Doctors;
