import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import HtmlImg from '../images/HTML.png';
import CssImg from '../images/CSS.png';
import JsImg from '../images/JS.png';
import PhpImg from '../images/PHP.png';
import GraphQlImg from '../images/graphql.png';
import CSharp from '../images/csharp.png';
import LaravelImg from '../images/LARAVEL.png';
import BootstrapImg from '../images/BOOTSTRAP.png';
import MUIImg from '../images/mui.png';
import GitlabImg from '../images/GITLAB.png';
import GitHubImg from '../images/github.png';
import BitBucketImg from '../images/bitbucket.png';
import AWSImg from '../images/aws.png';
import HerokuImg from '../images/HEROKU.png';
import SassImg from '../images/SASS.png';
import ReactImg from '../images/REACT.png';
import VueImg from '../images/vuejs.png';
import WebpackImg from '../images/webpack.png';
import FigmaImg from '../images/figma.png';
import PsImg from '../images/PS.png';
import AeImg from '../images/AE.png';

export default function Skills() {
  return (
    <>
      <Container className="">
        <Row>
          <Container style={{ textAlign: 'left' }}>
            <ReactTypingEffect
              className="skills-text"
              speed={30}
              typingDelay={1500}
              eraseDelay={1000000}
              text="I've used all these techs whenever I build a website depending on the requirements."
              staticText="Here are the tech stacks and tools that I'm using so far."
            />
          </Container>
          <Col lg={12} className="img-container">
            <img src={HtmlImg} alt="AndreDemavivas_Portfolio" />
            <img src={CssImg} alt="AndreDemavivas_Portfolio" />
            <img src={JsImg} alt="AndreDemavivas_Portfolio" />
            <img src={ReactImg} alt="AndreDemavivas_Portfolio" />
            <img src={VueImg} alt="AndreDemavivas_Portfolio" />
            <img src={CSharp} alt="AndreDemavivas_Portfolio" />
            <img src={PhpImg} alt="AndreDemavivas_Portfolio" />
            <img src={LaravelImg} alt="AndreDemavivas_Portfolio" />
            <img src={GraphQlImg} alt="AndreDemavivas_Portfolio" />
            <img src={AWSImg} alt="AndreDemavivas_Portfolio" />
            <img src={WebpackImg} alt="AndreDemavivas_Portfolio" />
            <img src={FigmaImg} alt="AndreDemavivas_Portfolio" />
            <img src={BootstrapImg} alt="AndreDemavivas_Portfolio" />
            <img src={MUIImg} alt="AndreDemavivas_Portfolio" />
            <img src={SassImg} alt="AndreDemavivas_Portfolio" />
            <img src={GitlabImg} alt="AndreDemavivas_Portfolio" />
            <img src={GitHubImg} alt="AndreDemavivas_Portfolio" />
            <img src={BitBucketImg} alt="AndreDemavivas_Portfolio" />
            <img src={HerokuImg} alt="AndreDemavivas_Portfolio" />
            <img src={PsImg} alt="AndreDemavivas_Portfolio" />
            <img src={AeImg} alt="AndreDemavivas_Portfolio" />
          </Col>
        </Row>
      </Container>
    </>
  );
}