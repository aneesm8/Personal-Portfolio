import React from 'react'
import '../../pages/style.css';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
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
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Front End developer from Toronto, Canada. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                    <li>C++ - GL Library</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage