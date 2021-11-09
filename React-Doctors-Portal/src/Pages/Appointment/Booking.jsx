import React from "react";
import { Container, Row } from "react-bootstrap";
import Section from "../../Shared/Section";
import SingleBooking from "./SingleBooking";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const Booking = ({ appointmnetDate }) => {
  return (
    <>
      <Section>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {bookings.map((booking) => (
              <SingleBooking
                booking={booking}
                key={booking.id}
                appointmnetDate={appointmnetDate}
              />
            ))}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Booking;
