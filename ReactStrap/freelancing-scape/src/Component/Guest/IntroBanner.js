import React from "react";
import * as Ioicons from "react-icons/io5";
import * as FAicons from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";
function IntroBanner() {
  return (
    <Container fluid className="introBanner" tag={"div"}>
      <section style={{}} id="banner-content">
        <Row className="banner-headline">
          <h3>
            <strong style={{ fontWeight: "600", color: "#333" }}>
              Hire experts or be hired for any job, any time.
            </strong>
            <br />
            <span>
              Thousands of small businesses use{" "}
              <strong style={{ color: "#2a41e8" }}>Hireo</strong> to turn their
              ideas into reality.
            </span>
          </h3>
        </Row>
        <Row id="search-bar">
          <Col>
            <InputGroup style={{ height: "50px"}}>
              <InputGroupText className="bg-primary" style={{ color: "white", width: "50px", paddingLeft: "15px" }}>
                <Ioicons.IoLocationSharp></Ioicons.IoLocationSharp>
              </InputGroupText>
              <Input placeholder="Location" type="text" style={{ padding: "15px" }}/>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup
              style={{ height: "50px", position: "relative", right: "10%" }}>
              <Input type="text" style={{ padding: "15px" }} />
              <Button color="primary" style={{ width: "50px" }}>
                <FAicons.FaSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row id="job-count">
          <ListGroup horizontal style={{display:"flex"}}>
            <ListGroupItem className="justify-content-between banner-list-item">
            <section className="count">1000</section>
             Jobs Posted
            </ListGroupItem>
            <ListGroupItem className="justify-content-between banner-list-item">
            <section  className="count">1000</section>
             Task Posted 
            </ListGroupItem>
            <ListGroupItem className="justify-content-between banner-list-item">
            <section  className="count">1000</section>
             Freelancer
            </ListGroupItem>
          </ListGroup>
        </Row>
      </section>
    </Container>
  );
}
export default IntroBanner;
