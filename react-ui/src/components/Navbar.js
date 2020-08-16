import React from "react";
//import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap'

const Nav = () => {
  return (
    <Navbar bg="dark" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="react-ui/public/favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Beyond Dope
    </Navbar.Brand>
  </Navbar>
  );
};

export default Nav;
