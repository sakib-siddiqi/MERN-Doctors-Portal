import React from "react";
import { Card, Col } from "react-bootstrap";

const SDCard = ({ cardData, imgPercent, imgPixel }) => {
  const { serviceImg, title, text, doctorsImg, doctorsName, doctorsContuct } =
    cardData;
  return (
    <Col>
      <Card className="border-0 align-items-center text-center">
        <Card.Img
          variant="top"
          src={serviceImg || doctorsImg}
          className={imgPercent && `w-${imgPercent}`}
          style={imgPixel && { maxWidth: imgPixel + "px" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold my-t-dark mb-3">
            {title || doctorsName}
          </Card.Title>
          <Card.Text className="text-muted">{text || doctorsContuct}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SDCard;
