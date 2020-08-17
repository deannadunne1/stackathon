import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import BeyondDope from "./BDLogo.png";

const Nav = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={BeyondDope}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Beyond Dope
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Nav;
