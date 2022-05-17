import React from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  Label,
} from "reactstrap";
import * as FAicons from "react-icons/fa";
function ListFreelancer() {
  return (
    <React.Fragment>
      <Container tag={"section"} className="list-freelancer-form">
        <Row className="mt-5">
          <Col xs="3">
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
          <Col xs="9">hello</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ListFreelancer;
