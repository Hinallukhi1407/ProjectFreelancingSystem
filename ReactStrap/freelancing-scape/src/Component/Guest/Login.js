import React from "react";
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
function Login() {
  return (
    <React.Fragment>
      <Row id="welcome-text">
        <h3>We're glad to see you again!</h3>
        <span>
          Don't have an account? <a href="#">Sign Up!</a>
        </span>
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
        <a
          href="#"
          style={{
            textDecoration: "none",
            position: "relative",
            marginTop: "5%",
          }}>
          Forgot Password ?
        </a>
        <Button color="primary" style={{marginTop:"5%",padding:"2%"}}>Login</Button>
      </Row>
    </React.Fragment>
  );
}
export default Login;
