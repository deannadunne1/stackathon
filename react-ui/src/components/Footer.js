import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled(Container)`
  background-color: ${({ theme }) => theme.primary};
`;

const FooterLink = styled.a`
  color: black;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterContainer fluid>
      <Row>
        <Col>
          <div className="footerHalf">
            <FooterLink href="https://github.com/deannadunne1/stackathon">
              <GoMarkGithub size={32} />
            </FooterLink>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="footerHalf">
            <FooterLink href="https://www.linkedin.com/in/deanna-dunne/">
              <AiOutlineLinkedin size={25} /> Deanna Dunne
            </FooterLink>
          </div>
        </Col>
        <Col>
          <FooterLink href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
            <AiOutlineLinkedin size={25} /> Emma Seely-Katz
          </FooterLink>
        </Col>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
