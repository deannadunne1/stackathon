import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Warning from "@material-ui/icons/Warning";
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

function Emergency() {
  return (
    <div id="emergency">
      <StyledHome>
        <Container fluid>
          <Row>
            <Col>
              <Link to="/emergency">
                <ButtonLink>
                  <StyledWarning style={{ fontSize: 40 }} />
                  <br />
                  CALL 911
                </ButtonLink>
              </Link>
            </Col>
            <Col>
              <Link to="/drugsearch">
                <ButtonLink>
                  <UsingAlone style={{ fontSize: 40 }} />
                  <br />
                  Call Never Use Alone
                </ButtonLink>
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledHome>
    </div>
  );
}

export default Emergency;
