import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
                  <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-52QH33QMYW"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-52QH33QMYW');`}
        </script>
      </Helmet>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello, bonjour! <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Anees Ibrahim</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/aneesm8");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/anees-ibrahim-23153a203/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/AneesIbrahimM");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/mrgame_i__/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home