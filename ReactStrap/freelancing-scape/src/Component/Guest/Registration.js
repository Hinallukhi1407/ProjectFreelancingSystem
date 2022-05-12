import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap";
import * as Hiicons from "react-icons/hi";
import * as Aiicons from "react-icons/ai";
import * as Biicons from "react-icons/bi";
import * as Mdicons from "react-icons/md";
import * as Faicons from "react-icons/fa";

function Registration() {
  const [isActive, setActive] = useState({
    Employeer: false,
    Freelancer: true,
  });

  const toggleClass = () => {
    setActive((prevState) => ({
      Employeer: !prevState.Employeer,
      Freelancer: !prevState.Freelancer,
    }));
  };

  return (
    <React.Fragment>
      <Row>
        <h3 style={{ textAlign: "center" }}>Let's create your account!</h3>
      </Row>
      <Row>
        <ButtonGroup>
          <Button
            className="user-button-defualt"
            id={isActive.Employeer ? "user-button" : ""}
            onClick={toggleClass}
            outline
          >
            <span className="hide-in-small-screen">
              <Mdicons.MdOutlineBusinessCenter
                style={{ marginRight: "10px", marginBottom: "2px" }}
                size={25}
              />
            </span>
            Employeer
          </Button>
          <Button
            id={isActive.Freelancer ? "user-button" : ""}
            className="user-button-defualt"
            onClick={toggleClass}
            outline
          >
            <span className="hide-in-small-screen">
              <Biicons.BiUserCircle size={25} />
            </span>
            Freelancer
          </Button>
        </ButtonGroup>
      </Row>
      <Row id="login-form">
        <InputGroup>
          <InputGroupText style={{ padding: "15px" }}>
            <Hiicons.HiOutlineMail />
          </InputGroupText>
          <Input placeholder="Email" style={{ padding: "10px" }} />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroupText>
            <Aiicons.AiOutlineLock></Aiicons.AiOutlineLock>
          </InputGroupText>
          <Input placeholder="Password" style={{ padding: "10px" }} />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroupText>
            <Aiicons.AiOutlineLock></Aiicons.AiOutlineLock>
          </InputGroupText>
          <Input placeholder="Password" style={{ padding: "10px" }} />
        </InputGroup>
        <a
          href="#"
          style={{
            textDecoration: "none",
            position: "relative",
            marginTop: "5%",
          }}
        >
          Already Have Account Login?
        </a>
        <Button color="primary" style={{ marginTop: "5%", padding: "2%" }}>
          Register
        </Button>
      </Row>
      <Row style={{ marginTop: "2%" }}>
        <hr></hr>
        <Col xs="6">
          <Button color="primary" style={{ width: "100%" }} outline>
            <Faicons.FaFacebookF size={20}/>
            <span className="hide-in-small-screen">Register Via Facebook</span>
          </Button>
        </Col>
        <Col xs="6">
          <Button color="danger" style={{ width: "100%" }} outline>
            <Aiicons.AiOutlineGooglePlus size={25} />
            <span className="hide-in-small-screen"> Register Via Google+</span>
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Registration;
