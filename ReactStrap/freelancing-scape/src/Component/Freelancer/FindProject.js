import React from 'react'
import {
    Container,
    Col,
    Row,
    InputGroup,
    InputGroupText,
    Input,
    Button,
    Label,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardSubtitle,
    ListGroup,
    ListGroupItem,
  } from "reactstrap";
import * as FAicons from "react-icons/fa";
import * as Mdicons from "react-icons/md";
import * as Aiicons from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function FindProject() {
  const navigate = useNavigate();
  const goToTaskList = () => {
    navigate('tasklist');
  }
  return (
    <React.Fragment>
      <Container tag={"section"} className="list-freelancer-form">
        <Row className="mt-5">
          <Col xs="3" id="filter-form">
            <h3>Location</h3>
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupText style={{ backgroundColor: "white" }}>
                <FAicons.FaSearchLocation size={25} color="gray" />
              </InputGroupText>
            </InputGroup>
            <h3>Category</h3>
            <Input type="select">
              <option>Default Select</option>
              <option>Default Select</option> <option>Default Select</option>{" "}
              <option>Default Select</option>
            </Input>
            <h3>Keyword</h3>
            <InputGroup>
              <Input type="text" placeholder="eg. Task Title" />
              <Button style={{ backgroundColor: "white", color: "#2A41E8" }}>
                <FAicons.FaPlus size={25} />
              </Button>
            </InputGroup>
            <h3>Hourly Rate</h3>
            <Input id="exampleRange" name="range" type="range" />
            <h3>Skills</h3>
            <InputGroup>
              <Input type="text" placeholder="php,reactjs" />
              <Button style={{ backgroundColor: "white", color: "#2A41E8" }}>
                <FAicons.FaPlus size={25} />
              </Button>
            </InputGroup>
          </Col>
          <Col xs="9" id="list-freelancer">
            <h3>Search</h3>
            <InputGroup>
              <Input />
              <Button color="primary">Search</Button>
            </InputGroup>
            <section className="mt-5">
              <Row>
                <Col>
                  <Card body style={{marginBottom:"10px"}}>
                    <CardBody>
                      <CardTitle tag="h5">
                        Food Delivery Mobile Application
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <Mdicons.MdOutlineLocationOn
                          size={20}
                          style={{ margin: "10px" }}
                        />{" "}
                        <span>London</span>
                        <Aiicons.AiOutlineClockCircle
                          size={20}
                          style={{ margin: "10px" }}
                        />
                        <span>5 mintues ago</span>
                      </CardSubtitle>
                      <CardText className="mt-3">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foste
                        <section
                          className="inline mt-3"
                          style={{ display: "flex", flexWrap: "wrap" }}
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
                            css
                          </span>{" "}
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            css
                          </span>
                        </section>
                        <Button
                          color="primary"
                          className="mt-4"
                          style={{ width: "100%" }}
                          onClick={goToTaskList}>
                          View Tasks
                        </Button>
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card body style={{marginBottom:"10px"}}>
                    <CardBody>
                      <CardTitle tag="h5">
                        Food Delivery Mobile Application
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <Mdicons.MdOutlineLocationOn
                          size={20}
                          style={{ margin: "10px" }}
                        />{" "}
                        <span>London</span>
                        <Aiicons.AiOutlineClockCircle
                          size={20}
                          style={{ margin: "10px" }}
                        />
                        <span>5 mintues ago</span>
                      </CardSubtitle>
                      <CardText className="mt-3">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foste
                        <section
                          className="inline mt-3"
                          style={{ display: "flex", flexWrap: "wrap" }}
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
                            css
                          </span>{" "}
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            css
                          </span>
                        </section>
                        <Button
                          color="primary"
                          className="mt-4"
                          style={{ width: "100%" }}
                        >
                          View Tasks
                        </Button>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card body style={{marginBottom:"10px"}}>
                    <CardBody>
                      <CardTitle tag="h5">
                        Food Delivery Mobile Application
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <Mdicons.MdOutlineLocationOn
                          size={20}
                          style={{ margin: "10px" }}
                        />{" "}
                        <span>London</span>
                        <Aiicons.AiOutlineClockCircle
                          size={20}
                          style={{ margin: "10px" }}
                        />
                        <span>5 mintues ago</span>
                      </CardSubtitle>
                      <CardText className="mt-3">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foste
                        <section
                          className="inline mt-3"
                          style={{ display: "flex", flexWrap: "wrap" }}
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
                            css
                          </span>{" "}
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            css
                          </span>
                        </section>
                        <Button
                          color="primary"
                          className="mt-4"
                          style={{ width: "100%" }}
                        >
                          View Tasks
                        </Button>
                      </CardText>
                    </CardBody>
                  </Card>
                  <Card body style={{marginBottom:"10px"}}>
                    <CardBody>
                      <CardTitle tag="h5">
                        Food Delivery Mobile Application
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <Mdicons.MdOutlineLocationOn
                          size={20}
                          style={{ margin: "10px" }}
                        />{" "}
                        <span>London</span>
                        <Aiicons.AiOutlineClockCircle
                          size={20}
                          style={{ margin: "10px" }}
                        />
                        <span>5 mintues ago</span>
                      </CardSubtitle>
                      <CardText className="mt-3">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foste
                        <section
                          className="inline mt-3"
                          style={{ display: "flex", flexWrap: "wrap" }}
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
                            css
                          </span>{" "}
                          <span
                            className="skill-badge"
                            style={{ width: "100px" }}
                          >
                            css
                          </span>
                        </section>
                        <Button
                          color="primary"
                          className="mt-4"
                          style={{ width: "100%" }}
                        >
                          View Tasks
                        </Button>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FindProject
