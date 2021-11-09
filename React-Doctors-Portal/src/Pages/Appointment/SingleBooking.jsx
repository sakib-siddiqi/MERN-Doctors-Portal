import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Card, Modal } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const SingleBooking = ({ booking, appointmnetDate, handleToastPromise }) => {
  const { firebase } = useAuth();
  const DefaultData = {
    appointmnetName: booking.name,
    appointmnetDate,
    email: firebase.user.email,
    schedule: booking.time,
  };
  /**
   * Modal Functions
   */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /**
   * Function
   */

  const [bookingInfo, setBookingInfo] = useState({
    patientName: firebase.user.displayName,
    phoneNumber: "",
  });

  function takeData(e) {
    const fuild = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[fuild] = value;
    setBookingInfo(newInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleClose();
    const bookingData = { ...DefaultData, ...bookingInfo };
    handleToastPromise(
      axios.post("http://localhost:5000/appointments", { ...bookingData }),
      {
        pending: "Loading...",
        success: "Booked 👍",
        error: "failed. Try again 🚫",
      }
    );
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
              placeholder="Patient Name"
              defaultValue={firebase.user.displayName}
              onBlur={(e) => takeData(e)}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              className="form-control mb-4"
              placeholder="Your Phone Number"
              onBlur={(e) => takeData(e)}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-4"
              value={firebase.user.email}
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
