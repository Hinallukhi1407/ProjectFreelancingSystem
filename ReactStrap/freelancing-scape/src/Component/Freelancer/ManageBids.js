import React, { useState } from "react";
import {
    Container,
    Col,
    Row,
    InputGroup,
    Input,
    Button,
    Label,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardSubtitle,
    Toast,
    ToastBody,
    ToastHeader,
    Spinner,
  } from "reactstrap";
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardTopNav from "../common/DashboardTopNav";
import * as Aiicons from "react-icons/ai";
import * as Biicons from "react-icons/bi";
import EditBids from "./../Freelancer/EditBids";

function ManageBids() {

  const [editForm,setEditForm] = useState(false)
  const toggleOfferForm = () => {
    setEditForm(!editForm);
  };
  return (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <DashboardSideBar pageType="freelancer" />
        <Row id="post-project-form">
          <DashboardTopNav />
          <Col xs="10" id="form-col" className="flex-box">
            <section id="postproject-form">
              <Card style={{ marginBottom: ".5rem", borderRadius: "1rem" }}>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <CardTitle tag="h5">Food Delevery App</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {"Duration : "}
                        <span> 30 Days</span>
                        <Aiicons.AiOutlineClockCircle
                          size={20}
                          style={{ margin: "10px" }}
                        />
                        <span>date</span>
                        <section>budget : 1000-2000$</section>
                      </CardSubtitle>
                      <CardText className="mt-3">
                        Description
                        <section
                          className="inline mt-3"
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            css
                          </span>
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            Html
                          </span>{" "}
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            Java
                          </span>
                        </section>
                      </CardText>
                    </Col>
                    <Col md="6" className="p-3  rounded" id="budget-card">
                      <Toast>
                        <ToastHeader className="text-center">
                          Your Bid
                        </ToastHeader>
                        <ToastBody className="text-center">1000 $</ToastBody>
                      </Toast>
                      <Row className="mt-4">
                        <Col md="6"><Biicons.BiEdit size={40} color="blue" onClick={toggleOfferForm}/></Col>
                        <Col md="6"><Aiicons.AiOutlineDelete size={40} color="red"/></Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              {editForm && <EditBids toggle={toggleOfferForm}/>}
            </section>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ManageBids;
