import React, { useState, useEffect } from "react";
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
  Badge
} from "reactstrap";
import * as Aiicons from "react-icons/ai";
import * as Biicons from "react-icons/bi";
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardTopNav from "../common/DashboardTopNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditProject from "./EditProject";
function AllProjects() {
  const [spinner, SetSpinner] = useState(true);
  const [data, setdata] = useState([]);
  const setList = () => {
    axios.get("http://localhost:8082/project/user/49").then((res) => {
      setdata(res.data);
      SetSpinner(false);
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("loginStatus") === "false") {
      navigate("/");
    } else {
      setList();
    }
  }, [localStorage.getItem("loginStatus")]);

  console.log(data);

  const [isEdit,setIsEdit] = useState(false)
  const toggleForm=()=>{
    setIsEdit(!isEdit)
  }
  return (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <DashboardSideBar pageType="employer" />
        <Row id="post-project-form">
          <DashboardTopNav />
          <Col xs="10" id="form-col" className="flex-box">
            <section id="postproject-form">
              {data.map((element) => {
                return (
                  <Card style={{ marginBottom: ".5rem", borderRadius: "1rem" }}>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <CardTitle tag="h5">{element.projectName}</CardTitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {"Duration : "}
                            <span>{element.duration} </span>
                            <Aiicons.AiOutlineClockCircle
                              size={20}
                              style={{ margin: "10px" }}
                            />
                            <span>Post Date : {element.postDate} </span>
                          </CardSubtitle>
                          <CardText className="mt-3">
                           {element.projectDescription}
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
                              Budget 
                              <Badge >Active</Badge>
                            </ToastHeader>
                            <ToastBody className="text-center">
                            {element.minBudget+"$ - "+ element.maxBudget + "$"}
                            </ToastBody>
                          </Toast>
                          <Row className="mt-4">
                            <Col md="6">
                              <Biicons.BiEdit size={40} color="blue" onClick={toggleForm}/>
                            </Col>
                            <Col md="6">
                              <Aiicons.AiOutlineDelete size={40} color="red" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                );
              })}
            </section>
          </Col>
        </Row>
      </Container>
      {isEdit &&<EditProject open={toggleForm}/>}
    </React.Fragment>
  );
}

export default AllProjects;
