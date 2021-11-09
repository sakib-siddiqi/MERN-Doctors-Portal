import React, { useState } from "react";
import { Col, Button, Card, Modal } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
const SingleBooking = ({ booking, appointmnetDate }) => {
  const [bookingData, setBookingData] = useState({});
  /**
   * Modal Functions
   */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /**
   * Function
   */
  const { firebase } = useAuth();
  const DefaultData = {
    appointmnetDate,
    email: firebase.user.email,
    patientName: firebase.user.displayName,
  };
  function takeData(e) {
    const fuild = e.target.name;
    const value = e.target.value;
    const newInfo = { ...DefaultData };
    newInfo[fuild] = value;
    setBookingData(newInfo);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClose();
    console.log(bookingData);
  }
  return (
    <Col key={booking.id}>
      <Card className="border-0 card-shadow">
        <Card.Body className="text-center">
          <h5 className="my-t-primary fw-md">{booking.name}</h5>
          <h6 className="my-t-dark fw-md">{booking.time}</h6>
          <small className=" text-muted d-block mb-3">
            {booking.space} space available
          </small>
          <button className="btn btn-primary rounded-0" onClick={handleShow}>
            Book appointment
          </button>
        </Card.Body>
      </Card>
      {/* Modal============= */}
      <Modal show={show} onHide={handleClose}>
        <Card.Body>
          <h6 className="text-center my-t-primary mb-5">{booking.name}</h6>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="time"
              className="form-control mb-4"
              value={booking.time}
              disabled
            />
            <input
              type="Name"
              name="patientName"
              className="form-control mb-4"
              placeholder="Your Name"
              value={firebase.user.displayName}
              disabled
            />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              name="phoneNumber"
              className="form-control mb-4"
              placeholder="Your Phone Number"
              onBlur={(e) => takeData(e)}
            />
            <input
              type="email"
              name="email"
              className="form-control mb-4"
              value="sakib@gmail.com"
              disabled
            />
            <input
              type="text"
              name="text"
              className="form-control mb-4"
              value={appointmnetDate}
              disabled
            />
            <Button type="submit" className="btn-primary">
              SEND
            </Button>
          </form>
        </Card.Body>
      </Modal>
    </Col>
  );
};

export default SingleBooking;
