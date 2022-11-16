import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function Work(){
  return(
    <>
      <Container>
        <Row>
          <Container>
            <h1 className="work-heading">Projects I've made so far: </h1>
          </Container>
          <Col lg={12}>
            <div className="first-project">
              <h1>Sportscut Barbershop</h1>
            </div>
          </Col>
          <Col lg={12}>
            <div className="second-project">
              <h1>Book a Frontliner</h1>
            </div>
          </Col>
          <Col lg={12} >
            <div className="third-project">
              <h1>Leave Management System</h1>
            </div>
          </Col>
          <Col lg={12} >
            <div className="fourth-project">
              <h1>Swing Dreamers</h1>
            </div>
          </Col>
          <Col lg={12} >
            <div className="fifth-project">
              <h1>Swing Dreamers Mobile</h1>
            </div>
          </Col>
          <Col lg={12} >
            <div className="sixth-project">
              <h1>We Donate Web</h1>
            </div>
          </Col>
          <Col lg={12} >
            <div className="seventh-project">
              <h1>We Donate Admin</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}