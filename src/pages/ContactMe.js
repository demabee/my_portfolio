import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Toast } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [showToast, setShowToast] = useState(false);
  const form = useRef();
  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        setShowToast(true);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Container className="vh-100">
        <Row>
          <Col>
            <Form ref={form} onSubmit={handleSendEmail}>
              <Row>
                <Col lg={2} className="text-right">
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col lg={10}>
                  <Form.Control type="text" name="name" />
                </Col>
              </Row>
              <Row className="my-3">
                <Col lg={2} className="text-right">
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col lg={10}>
                  <Form.Control type="email" name="email" />
                </Col>
              </Row>
              <Row className="my-3">
                <Col lg={2} className="text-right">
                  <Form.Label>Message</Form.Label>
                </Col>
                <Col lg={10}>
                  <Form.Control as="textarea" rows="10" name="message" />
                </Col>
              </Row>
              <div className="d-flex w-100 justify-content-center ms-5">
                <button type="submit" className="btn btn-primary w-25 fw-bolder">Send</button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Toast show={showToast}>
        <Toast.Header>
          <strong className="me-auto">Sent Successfully</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>Your message has been sent.</Toast.Body>
      </Toast>
    </>
  );
}