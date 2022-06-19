import React from 'react'
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardTopNav from "../common/DashboardTopNav";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Button,
  Label,
  FormText,
  InputGroupText,
  Card,CardBody,CardTitle,CardSubtitle,CardText
} from "reactstrap";
function EmployerDashboard() {
  return (
    <React.Fragment>
    <Container fluid style={{ padding: "0px" }}>
      <DashboardTopNav />
      <Row>
        <Col id="sidebarul" style={{ color: "gray", margin: "0%" }} xs="2">
          <DashboardSideBar pagetype="employer" />
        </Col>
        <Col xs="10" id="form-col">
          <aside style={{ backgroundColor: "", margin: "2%" }}>
           
          </aside>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
  )
}

export default EmployerDashboard
