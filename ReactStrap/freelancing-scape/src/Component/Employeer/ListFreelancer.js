import React from "react";
import avatar from "../../Images/user-avatar-small-02.jpg";
import { useNavigate } from "react-router-dom";
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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import * as FAicons from "react-icons/fa";
function ListFreelancer() {
  const navigate = useNavigate();
  const goToProfileDesc = () => {
    console.log("ajbdashj")
    navigate('profiledesc');
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
              <Card body id="free-profile-list-card">
                <Row>
                  <Col xs="1" id="free-avatar">
                    <img
                      src={avatar}
                      alt=""
                      style={{
                        borderRadius: "100px",
                      }}
                    />
                  </Col>
                  <Col
                    xs="5"
                    className=" text-align-center"
                    id="free-name">
                    <h5>Jack Harlow</h5>
                    <h6 className="fw-lighter">UI/UX Designer</h6>
                  </Col>
                  <Col
                    xs="6"
                    id="free-list-button"                   >
                    <CardText >
                      <ListGroup horizontal >
                        <ListGroupItem
                          className="justify-content-between banner-list-item border-left"
                          style={{color: "black"}}>
                          <section className="count">Job Sucess</section>
                          99%
                        </ListGroupItem>
                        <ListGroupItem
                          className="justify-content-between banner-list-item"
                          style={{ color: "black" }}
                        >
                          <section className="count">Rate</section>
                          14$/hr
                        </ListGroupItem>
                        <ListGroupItem
                          className="justify-content-between banner-list-item"
                          style={{ color: "black" }}>
                          <section className="count">Location</section>
                          London
                        </ListGroupItem>
                        
                      </ListGroup>
                      <Button color="primary" className="mt-3" style={{width:"100%"}} onClick={goToProfileDesc}>
                        View Profile
                      </Button>
                    </CardText>
                  </Col>
                </Row>
              </Card>
            
            </section>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ListFreelancer;
