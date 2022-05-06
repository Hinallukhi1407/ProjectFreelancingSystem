import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../Images/logo2.png";

function SideBar() {
  return (
    <React.Fragment>
      <motion.div
        id="sidebarnav"
        initial={{ scale: 1, width: 0 }}
        animate={{ scale: 1, width: 300 }}
        exit={{ scale: 0.5, width: 0 }}
      >
        <motion.div initial={{opacity:1}} exit={{opacity:0,delay:0}}>
          <Row id="sidebarTitle">
            <section id="logosection" style={{border:"none"}}>
              <img src={logo} className="logo" />
            </section>
          </Row>
          <Row id="sidebarul">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Membership Plans</li>
              <li>Featured Jobs</li>
              <li>Featured Cities</li>
            </ul>
          </Row>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}

export default SideBar;
