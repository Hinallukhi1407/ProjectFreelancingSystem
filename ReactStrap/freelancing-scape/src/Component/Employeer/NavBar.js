import React,{useState} from "react";
import logo from "../../Images/logo.png";
import { Container, Row, Col } from "reactstrap";
import * as AIicons from "react-icons/ai";
import SideBar from "./SideBar";
import { motion ,AnimatePresence} from "framer-motion";
import {Link} from "react-router-dom";
function NavBar() {
  const [sideBar, setSideBar] = useState(false)

  return (
    <React.Fragment>
      <header>
        <AnimatePresence>
          {sideBar ? <SideBar></SideBar> : ""}
        </AnimatePresence>
        <Container fluid tag="nav">
          <nav id="topMenu">
            <Row>
              {sideBar ?""
              :  <Col xs="1">
              <section id="logosection">
                <img src={logo} className="logo" />
              </section>
            </Col>}
              <Col xs="10">
                <ul id="ulMain">
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="headerLinkStyle">
                      Employeer
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
                  <a>
                    <span
                      className="material-icons"
                      style={{ position: "relative", top: 7 }}
                      id="LoginIcon">
                      login
                    </span>
                    <span id="loginText">Login</span>
                  </a>
                  <a onClick={() => {setSideBar((v) => !v)}}>
                    <AIicons.AiOutlineBars size={25} id="barIcon" />
                  </a>
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
