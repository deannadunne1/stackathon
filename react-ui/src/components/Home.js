import React from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'


const Home = () => {
  return (
    <div id="homePage">
      <Container fluid>
        <Row>
          <Col>
            <Link to='/emergency' >
                <ButtonLink>
                  Emergency
                </ButtonLink>
            </Link>
          </Col>
          <Col>
            <Link to='/drugsearch' >
              <ButtonLink>
                Drug Search
              </ButtonLink>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to='/alone' >
              <ButtonLink>
                Using Alone
              </ButtonLink>
            </Link>
          </Col>
          <Col>
            <Link to='/settings' >
                <ButtonLink>
                	Settings
                </ButtonLink>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

// creates a class called asdfq with those properties
// and when you use it above, is the same thing as <div className='asdfq'>

const ButtonLink =styled.div`
  border: 3px solid black;
  border-radius: 5px;
`
export default Home
