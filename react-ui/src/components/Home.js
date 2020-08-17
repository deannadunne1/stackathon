import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Warning from "@material-ui/icons/Warning";
import Search from "@material-ui/icons/Search";
import Settings from "@material-ui/icons/Settings";
import UsingAlone from "@material-ui/icons/Face";

const ButtonLink = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  color: black;
  background-color: ${({ theme }) => theme.darkPrimary};
  margin-bottom: 20px;
  box-shadow: 10px 10px 10px gray;
`;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  height: 100%;
  align-items: center;
`;

const StyledWarning = styled(Warning)`
  color: ${({ theme }) => theme.danger};
`;

const Home = () => {
  return (
    <StyledHome>
      <Container fluid>
        <Row>
          <Col>
            <Link to="/emergency">
              <ButtonLink>
                <StyledWarning style={{ fontSize: 40 }} />
                <br />
                Emergency
              </ButtonLink>
            </Link>
          </Col>
          <Col>
            <Link to="/drugsearch">
              <ButtonLink>
                <Search style={{ fontSize: 40 }} />
                <br />
                Drug Search
              </ButtonLink>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/alone">
              <ButtonLink>
                <UsingAlone style={{ fontSize: 40 }} />
                <br />
                Using Alone
              </ButtonLink>
            </Link>
          </Col>
          <Col>
            <Link to="/settings">
              <ButtonLink>
                <Settings style={{ fontSize: 40 }} />
                <br />
                Settings
              </ButtonLink>
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHome>
  );
};

// creates a class called asdfq with those properties
// and when you use it above, is the same thing as <div className='asdfq'>

export default Home;
