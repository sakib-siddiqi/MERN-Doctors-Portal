import React from "react";
import { Card, Button, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
const TableAppointments = () => {
  return (
    <section id="appointmentTable">
      <Card.Body className="bg-white rounded-3 mb-3 card-shadow">
        <h4 className="text-primary m-0">Recent Appointment</h4>
      </Card.Body>
      <Card.Body
        className="bg-white rounded-3 card-shadow"
        style={{ overflow: "scroll", maxHeight: "80vh" }}
      >
        <Table
          bordered
          variant="light"
          style={{ overflow: "scroll", maxHeight: "80vh" }}
        >
          <thead className="text-secondary">
            <tr>
              <th>Sr. No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Contact</th>
              <th>Prescription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary">view</Button>
              </td>
              <td>
                <button className="btn btn-primary me-2">view</button>
                <button className="btn btn-primary">
                  <FiEdit />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary">view</Button>
              </td>
              <td>
                <button className="btn btn-primary me-2">view</button>
                <button className="btn btn-primary">
                  <FiEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </section>
  );
};

export default TableAppointments;
