import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaGitlab, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer(){

  return(
    <>
      <Container fluid className="footer-container">
        <h1>Get in touch.</h1>
        <Container className="logo-container">
          <a href="https://www.facebook.com/andredemavivas" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://gitlab.com/andredemavivas" target="_blank" rel="noreferrer">
            <FaGitlab />
          </a>
          <a href="https://github.com/demabee" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/andredemavivas/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </Container>
      </Container>
    </>
  );
}