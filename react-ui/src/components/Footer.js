import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <div className="footerHalf">
              <a href="https://github.com/deannadunne1/stackathon">
                <GoMarkGithub color="##e36397" size={32} /> GitHub
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footerHalf">
              <a href="https://www.linkedin.com/in/deanna-dunne/">
                <AiOutlineLinkedin size={25} /> Deanna Dunne
              </a>
            </div>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
              <AiOutlineLinkedin size={25} /> Emma Seely-Katz
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
