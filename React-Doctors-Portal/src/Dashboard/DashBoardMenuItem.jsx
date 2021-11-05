import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DashBoardMenuItem = ({ children, to, ...rest }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        {...rest}
        to={to}
        className="nav-link rounded-3 mb-3  shadow-sm text-center text-md-start dashBoard-link"
        activeClassName=" dashBoard-link-active"
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

export default DashBoardMenuItem;
