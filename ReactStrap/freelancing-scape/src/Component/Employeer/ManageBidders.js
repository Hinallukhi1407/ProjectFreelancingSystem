import React from "react";
import {
  Row,
  Col,
  Container,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardTopNav from "../common/DashboardTopNav";
function ManageBidders() {
  return (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <DashboardSideBar />
        <Row id="post-project-form">
          <DashboardTopNav />
          <Col xs="10" id="form-col" className="flex-box">
            <section id="postproject-form">
              <Toast style={{ width: "100%" }} className="mb-1">
                <ToastHeader>Project Name</ToastHeader>
                <ToastBody>
                  <Row>
                    <Col md="6">
                      Project Description
                      <section>Budget</section>
                    </Col>
                    <Col md="6">
                      <Toast>
                        <ToastBody>Number Of Bids Placed</ToastBody>
                      </Toast>
                    </Col>
                  </Row>
                </ToastBody>
              </Toast>
            </section>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ManageBidders;
