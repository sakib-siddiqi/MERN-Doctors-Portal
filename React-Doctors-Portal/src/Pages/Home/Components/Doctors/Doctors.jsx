import React from "react";
import { Container, Row } from "react-bootstrap";
import Section from "../../../../Shared/Section";
import HomeTitle from "../Common/HomeTitle";
import SDCard from "../Common/SDCard";
const doctorsData = [
  {
    doctorsImg: "./images/doctor-small.png",
    doctorsContuct: "012121212",
    doctorsName: "korim",
  },
  {
    doctorsImg: "./images/doctor-small.png",
    doctorsContuct: "012121212",
    doctorsName: "korim",
  },
  {
    doctorsImg: "./images/doctor-small.png",
    doctorsContuct: "012121212",
    doctorsName: "korim",
  },
];
const Doctors = () => {
  return (
    <Section id="Doctors" className="p-3">
      <Container className="mt-5">
        <HomeTitle className="text-center" subTitle="Our Doctors" />
        <Row className="mt-4">
          {doctorsData.map((doctorData) => (
            <SDCard imgPercent={75} cardData={doctorData} />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Doctors;
