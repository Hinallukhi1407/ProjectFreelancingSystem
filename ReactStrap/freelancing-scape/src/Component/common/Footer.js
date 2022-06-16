import React from 'react'
import {Container,Col,Row} from 'reactstrap'
import * as Riicons from 'react-icons/ri'
import * as Aiicons from 'react-icons/ai'

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                 
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Featured Cities</a>
                  </li>
                  <li>
                    <a href="#">Plans</a>
                  </li>
                  <li>
                    <a href="#">Get Invoice</a>
                  </li>
                  <li>
                    <a href="#">View Projects</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-col">
                <h4>Start Freelancing</h4>
                <ul>
                  <li>
                    <a href="#">Post Project</a>
                  </li>
                  <li>
                    <a href="#">Find Freelancer</a>
                  </li>
                  <li>
                    <a href="#">View Project</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#">
                    <Riicons.RiFacebookCircleFill size={40} color="blue"/>
                  </a>
                  <a href="#">
                    <Aiicons.AiFillTwitterCircle size={40} color="lightblue"/>
                  </a>
                  <a href="#">
                   <Aiicons.AiOutlineInstagram size={40} color="pink"/>
                  </a>
                  <a href="#">
                    <Aiicons.AiFillLinkedin size={40} color="" style={{borderRadius:"500px"}}/>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Footer
