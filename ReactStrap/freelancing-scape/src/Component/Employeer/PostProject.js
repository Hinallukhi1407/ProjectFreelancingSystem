import React,{useState} from "react";
import DashboardSideBar from "../common/DashboardSideBar";
import DashboardTopNav from "../common/DashboardTopNav";
import { Row, Col, Container,FormGroup,Input,InputGroup,Button,Label,FormText } from "reactstrap";
import * as Faicons from 'react-icons/fa'
import * as Mdicons from 'react-icons/md'
import { useNavigate } from "react-router-dom";



function PostProject() {
  let navigate = useNavigate();
  const GoToTasksPage=()=>{
    navigate("posttasks")
  }

  const [skill,setSkill] = useState("");

  const [skills,setSkills] = useState([]);
 
  const addSkill=()=>{
    if(skill!=""){
    setSkills([...skills,skill]);
    
    setSkill('')}
  }
  const deleteSkill=(index)=>{
  //  console.log(index)
    const updatedSkills = skills.filter((element,id)=>{
      return index != id;
    })
    setSkills(updatedSkills)
  }

  return (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <DashboardTopNav />
        <Row>
          <Col id="sidebarul" style={{ color: "gray", margin: "0%" }} xs="2">
            <DashboardSideBar />
          </Col>
          <Col xs="10" id="form-col">
            <section id="postproject-form">
              
              <FormGroup floating>
                <Input
                  id="exampleEmail"
                  name="txtprojectname"
                  placeholder="Project Name"
                  type="text"
                />
                <Label for="exampleEmail">Project Name</Label>
              </FormGroup>
              <Row >
                <Col xs="6" className="width-full">
                  <Label>From</Label>
                  <Input type="date" />
                </Col>
                <Col xs="6" className="width-full">
                  <Label>To</Label>

                  <Input type="date" />
                </Col>
              </Row>
              <Row className="mt-4" >
                <Label>Skills Required For Project</Label>
                <Col xs="6" className="width-full">
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="eg. Task Title"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                    />
                    <Button
                      style={{ backgroundColor: "white", color: "#2A41E8" }}
                      onClick={addSkill}
                    >
                      <Faicons.FaPlus size={25} />
                    </Button>
                  </InputGroup>
                </Col>
                <Col xs="6">
                  <section style={{ display: "flex", flexWrap: "wrap" }}>
                    {skills.map((element, index) => {
                      return (
                        <span
                          className="skill-badge"
                          key={index}
                          style={{ margin: 0, width: "25%", margin: 2 }}
                        >
                          {element}
                          <Mdicons.MdClose
                            size={25}
                            style={{ margin: 10 }}
                            onClick={() => deleteSkill(index)}
                          />
                        </span>
                      );
                    })}
                  </section>
                </Col>
              </Row>
              <Row className="mt-4" >
                <Col xs="12">
                  <Label>Project Description</Label>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    rows="5"
                  />
                </Col>
              </Row>
              <Row className="mt-4" >
                <Col xs="12">
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input id="exampleFile" name="file" type="file" />
                    <FormText>
                      Images or documents that might be helpful in describing
                      your project
                    </FormText>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="5">
                <Button color="primary" onClick={GoToTasksPage}>Add Tasks</Button>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default PostProject;
