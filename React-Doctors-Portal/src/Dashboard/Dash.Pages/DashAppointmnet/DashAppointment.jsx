import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import MyCalender from "../../../Shared/Calendar/MyCalendar";
import Section from "../../../Shared/Section";
import Loading from "../../../Shared/Components/Loading";
// date
const date = new Date();
const defaultValue = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
};

const DashAppointment = () => {
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [thisUsersAppointments, setThisUsersAppointments] = useState([]);
  const { firebase } = useAuth();
  const [dataLoadError, setDataLoadError] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  // dateHandler
  const handleAppointmentDate = () => setSelectedDay;
  const date = new Date(selectedDay.year, selectedDay.month, selectedDay.day);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/appointments?email=${
          firebase.user.email
        }&appointmnetDate=${date.toLocaleDateString()}`
      )
      .then((res) => {
        if (res.data.length) {
          setThisUsersAppointments(res.data);
          setDataLoadError("");
        } else {
          setDataLoadError("No Data");
        }
      })
      .catch((err) => setDataLoadError("Failed to load data"))
      .finally(() => setDataLoading(false));
  }, [date]);
  return (
    <Section>
      <Row xs={1}>
        <Col className="text center" md={4}>
          <h4>{date.toDateString()}</h4>
          <MyCalender
            selectedDay={selectedDay}
            dateHandler={handleAppointmentDate}
            appointmentDate={date}
          />
        </Col>
        <Col md={8}>
          <Card.Body className="p-3 card-shadow bg-white rounded-3">
            <h5 className="text-primary">{date.toDateString()} </h5>
            {dataLoading ? (
              <div className="v-center h-center">
                <Loading />
              </div>
            ) : dataLoadError ? (
              <h2 className="fw-md" style={{ color: "#ddd" }}>
                {dataLoadError}
              </h2>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Schedule</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {thisUsersAppointments.map((data, index) => (
                    <tr key={data._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.patientName}</td>
                      <td>{data.schedule}</td>
                      <td>
                        <button className="btn btn-primary btn-sm">
                          Not visited
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Section>
  );
};

export default DashAppointment;
