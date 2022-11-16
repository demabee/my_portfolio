import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutMeImage from '../images/portfolio_image.jpg'
import ReactTypingEffect from 'react-typing-effect';

export default function AboutMe() {

  return (
    <div>
      <>
        <Row>
          <Col lg={12}>
            <Container>
              <div className="aboutme-img-container position-relative">
                <img className="aboutMeImg" src={AboutMeImage} alt="AndreDemavivas_Porfolio" />
                <h1>Andre Demavivas</h1>
              </div>
            </Container>
          </Col>
          <Col lg={12} className="my-5">
            <Container style={{ textAlign: 'left' }}>
              <ReactTypingEffect
                className="aboutme-text text-left"
                speed={30}
                typingDelay={1500}
                eraseDelay={1000000}
                text="who's passionate about his work and loves to learn new tech stacks available in the market. But, coffee comes first before anything else. 😜"
                staticText="A Full Stack Web Developer / Front-End and Mobile Developer"
              />
            </Container>
          </Col>
        </Row>
      </>
    </div>
  );
}