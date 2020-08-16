import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap'

const Nav = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Link to='/'>
        <Navbar.Brand>
          <img
            alt=""
            src="BDLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Beyond Dope
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Nav;
