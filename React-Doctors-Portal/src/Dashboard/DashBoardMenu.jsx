import React from "react";
import { IoGrid, IoNewspaperSharp } from "react-icons/io5";
import DashBoardMenuItem from "./DashBoardMenuItem";
import { BsFillCalendarCheckFill, BsPeopleFill } from "react-icons/bs";
const DashBoardMenu = () => {
  return (
    <>
      <DashBoardMenuItem to="/dashboard" exact>
        <IoGrid className="me-0 me-md-2" />
        <span className="d-none d-md-inline-block">Dashboard</span>
      </DashBoardMenuItem>
      <DashBoardMenuItem to="/dashboard/appointment">
        <BsFillCalendarCheckFill className="me-0 me-md-2" />{" "}
        <span className="d-none d-md-inline-block">Appointment</span>
      </DashBoardMenuItem>
      <DashBoardMenuItem to="/dashboard/patients">
        <BsPeopleFill className="me-0 me-md-2" />{" "}
        <span className="d-none d-md-inline-block">Patients</span>
      </DashBoardMenuItem>
      <DashBoardMenuItem to="/dashboard/prescriptions">
        <IoNewspaperSharp className="me-0 me-md-2" />{" "}
        <span className="d-none d-md-inline-block">Prescriptions</span>
      </DashBoardMenuItem>
    </>
  );
};

export default DashBoardMenu;
