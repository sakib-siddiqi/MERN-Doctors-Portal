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
        className="rounded-3 mb-3 dashBoard-link shadow-sm text-center text-md-start"
        activeClassName="dashBoard-link-active"
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

export default DashBoardMenuItem;
