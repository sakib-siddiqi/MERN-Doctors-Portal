import React from "react";
import { Card, Col } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
const SDCard = ({ cardData, imgPercent, imgPixel }) => {
  const { serviceImg, title, text, doctorsImg, doctorsName, doctorsContuct } =
    cardData;
  return (
    <Col xs={10} md={5} lg={3}>
      <Card className="border-0 align-items-center text-center">
        <Card.Img
          variant="top"
          src={serviceImg || doctorsImg}
          className={imgPercent && `w-${imgPercent}`}
          style={imgPixel && { maxWidth: imgPixel + "px" }}
        />
        <Card.Body>
          <Card.Title className="fw-md my-t-dark mb-2">
            {title || doctorsName}
          </Card.Title>
          <Card.Text className="text-muted">
            {doctorsContuct && <BiPhoneCall className="me-2 fw-bold" />}
            {text || doctorsContuct}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SDCard;
