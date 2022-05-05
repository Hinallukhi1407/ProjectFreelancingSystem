import React from "react";
import logo from "../../Images/logo.png";
import { Container, Row, Col } from "reactstrap";
import { FaBeer } from "react-icons/fa";
import * as AIicons from "react-icons/ai";

function NavBar() {
  return (
    <React.Fragment>
      



      <header>
        <Container fluid tag="nav">
          <nav id="topMenu">
            <Row>
              <Col xs="1">
                <section id="logosection">
                  <img src={logo} className="logo" />
                </section>
              </Col>
              <Col xs="10">
                <ul id="ulMain">
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Home
                      <span className="material-icons arrow-icon">
                        arrow_drop_down
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Dropdwon
                      <span className="material-icons arrow-icon">
                        arrow_drop_down
                      </span>
                    </a>
                    <ul>
                      <span className="arrow" />
                      <li>
                        <a href="#">list1</a>
                      </li>
                      <li>
                        <a href="#">list1</a>
                      </li>
                      <li>
                        <a href="#">list1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Dropdwon
                      <span className="material-icons arrow-icon">
                        arrow_drop_down
                      </span>
                    </a>
                    <ul>
                      <span className="arrow" />
                      <li>
                        <a href="#">list1</a>
                      </li>
                      <li>
                        <a href="#">list1</a>
                      </li>
                      <li>
                        <a href="#">list1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Menu item 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Menu item 4
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs="1">
                <section id="loginSection">
                  <a href="#">
                    <span
                      className="material-icons"
                      style={{ position: "relative", top: 7 }}
                      id="LoginIcon">
                      login
                    </span>
                    <span id="loginText">Login</span>
                  </a>
                    <AIicons.AiOutlineBars size={25} id="barIcon"/>
                </section>
              </Col>
            </Row>
          </nav>
        </Container>
      </header>
    </React.Fragment>
  );
}
export default NavBar;
