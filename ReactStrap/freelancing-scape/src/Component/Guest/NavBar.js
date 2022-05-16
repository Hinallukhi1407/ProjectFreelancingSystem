import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { Container, Row, Col,Popover,PopoverHeader,PopoverBody } from "reactstrap";
import * as AIicons from "react-icons/ai";
import * as FIicons from "react-icons/fi"
import * as BSicons from "react-icons/bs"
import SideBar from "./SideBar";
import RegistrationContainer from "./RegistrationContainer";
import { motion, AnimatePresence } from "framer-motion";
import avatar from '../../Images/user-avatar-small-02.jpg'
import { Link } from "react-router-dom";


function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const [RegVisible, SetRegVisible] = useState(false);

  const toggleReg = () => {
    SetRegVisible(!RegVisible);
  };
  var MenuType = "Guest";


  
  const [test,settest]= useState(false);
  const onHover = () => {
    settest(true)
  }
  
  const onHoverLeave = () => {
    settest(false)
  }
  return (
    <React.Fragment>
      <header>
        <AnimatePresence>{sideBar ? <SideBar></SideBar> : ""}</AnimatePresence>
        <Container fluid tag="nav">
          <nav id="topMenu">
            {/***********************Guest Menu***********************/}
            {MenuType == "Guest" && (
              <Row>
                {sideBar ? (
                  ""
                ) : (
                  <Col xs="1">
                    <section id="logosection">
                      <img src={logo} className="logo" />
                    </section>
                  </Col>
                )}
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
                    <a onClick={toggleReg}>
                      <FIicons.FiLogIn size={25} id="login-icon" />
                      <span id="loginText">Login</span>
                    </a>
                    <a
                      onClick={() => {
                        setSideBar((v) => !v);
                      }}
                    >
                      <AIicons.AiOutlineBars size={25} id="barIcon" />
                    </a>
                  </section>
                </Col>
              </Row>
            )}
            {/***********************Employer Menu***********************/}
            {MenuType == "Employer" && (
              <Row>
                {sideBar ? (
                  ""
                ) : (
                  <Col xs="1">
                    <section id="logosection">
                      <img src={logo} className="logo" />
                    </section>
                  </Col>
                )}
                <Col xs="10">
                  <ul id="ulMain">
                    <li>
                      <a href="#" className="headerLinkStyle">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="headerLinkStyle">
                        For Employer
                        <span className="material-icons arrow-icon">
                          arrow_drop_down
                        </span>
                      
                      </a>
                      <ul>
                        <span className="arrow" />
                        <li>
                          <a href="#">Find Freelancer</a>
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
                    <section
                      style={{
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={onHover}
                      onMouseLeave={onHoverLeave}
                    >
                      <img src={avatar} alt="" id="userAvatar" />
                      {test && (
                     
                        <motion.div
                        initial={{ scale: 1, width: 100 }}
                        animate={{ scale: 1, width: 0 }}
                        exit={{ scale: 0.5, width: 0 }}>
                             <AnimatePresence>
                          <span
                            className="arrow"
                            style={{ top: "80%", left: "50%" }}/>
                          <section id="profile-popup">
                            <h5>Jack Harlow</h5>
                            <ul>
                              <li>Dashboard</li>
                              <li>Settings</li>
                            </ul>
                          </section>
                          </AnimatePresence>
                        </motion.div>
                       
                      )}
                    </section>

                    <a
                      onClick={() => {
                        setSideBar((v) => !v);
                      }}
                    >
                      <AIicons.AiOutlineBars size={25} id="barIcon" />
                    </a>
                  </section>
                </Col>
              </Row>
            )}
            {/**********************Freelancer Menu***********************/}
            {MenuType == "Freelancer" && (
              <Row>
                {sideBar ? (
                  ""
                ) : (
                  <Col xs="1">
                    <section id="logosection">
                      <img src={logo} className="logo" />
                    </section>
                  </Col>
                )}
                <Col xs="10">
                  <ul id="ulMain">
                    <li>
                      <a href="#" className="headerLinkStyle">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="headerLinkStyle">
                        For Freelancer
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
                    <a onClick={toggleReg}>
                      <span
                        className="material-icons"
                        style={{ position: "relative", top: 7 }}
                        id="LoginIcon"
                      >
                        login
                      </span>
                      <span id="loginText">Login</span>
                    </a>
                    <a
                      onClick={() => {
                        setSideBar((v) => !v);
                      }}
                    >
                      <AIicons.AiOutlineBars size={25} id="barIcon" />
                    </a>
                  </section>
                </Col>
              </Row>
            )}
          </nav>
        </Container>
      </header>
      {RegVisible ? (
        <RegistrationContainer toggleReg={toggleReg}></RegistrationContainer>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
export default NavBar;
