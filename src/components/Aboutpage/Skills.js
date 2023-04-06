import React from 'react'
import '../Aboutpage/Aboutpage.css'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'

function Skills() {
  return (
    
    <Container>
      <div className="skilltitle">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-52QH33QMYW"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-52QH33QMYW');`}
        </script>
      </Helmet>
        <Row>
          <h2 className='text-center'>My Skills</h2>
          <Col className='skillbox' md={7}>
          </Col>
          <col md={5}></col>
        </Row>
      </div>
    </Container>
  )
}

export default Skills