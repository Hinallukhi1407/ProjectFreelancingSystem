import React,{useState,useEffect,useContext,useLayoutEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup
} from "reactstrap";
import avatar from "../../Images/user-avatar-small-02.jpg";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

function TaskDescription() {
  const navigate = useNavigate()
  const location = useLocation()
  const [range,setRange] = useState("")
  const handleBudgetRange=(e)=>{
    setRange(e.target.value)
  }
  const [projectData, setProjectData] = useState([]);

  const setList = () => {
   let response =  axios
      .get("http://localhost:8082/project/"+location.state.id)
      .then((res) => {
        setProjectData(res.data);
        console.log(projectData)
      });
  };
  const { loginstat, usrname, token } = useContext(UserContext);
  const [loginstatus] = loginstat;
  const [tokenstr] = token;
  useEffect(() => {
    if (localStorage.getItem("loginStatus") === "false") {
      navigate("/");
    } else {
      setList();
    }
  }, [loginstatus]);
  //console.log(projectData.startDate)
  function daysDiff(dateTo) {
    var today = new Date(),
    dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const diffInMs = Math.abs(dateTo - dateToday);

    console.log( "min"+diffInMs)
    console.log("aaj ka date" + today)
    console.log("bus date" + dateToday)
    return diffInMs / (1000 * 60 * 60 * 24);
   }

  return (
    <div>
      <Container fluid>
        <Row id="single-task">
          <Col id="single-task-name" xs="6">
            <h3>{projectData.projectName}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="6" id="free-aboutme">
            <h3 style={{ fontWeight: "400", marginBottom: "3%" }}>
              Task Description
            </h3>
            <p style={{ lineHeight: "35px", textAlign: "left" }}>
              {projectData.projectDescription}
            </p>
            <section id="free-work-exp">
              <h3 style={{ fontWeight: "400", marginBottom: "3%" }}>
                Attachments
              </h3>
              <section id="attachment-span">
                <RiIcons.RiAttachmentLine size={30} />
              </section>
            </section>
            <section className="mt-4">
              <h3 style={{ fontWeight: "400", marginBottom: "3%" }}>Skills</h3>
              <article style={{ display: "flex", flexWrap: "wrap" }}>
                <span className="skill-badge" style={{ width: "100px" }}>
                  css
                </span>
                <span className="skill-badge" style={{ width: "100px" }}>
                  css
                </span>
                <span className="skill-badge" style={{ width: "100px" }}>
                  css
                </span>
              </article>
            </section>
          </Col>
          <Col id="free-job-details">
            <Row id="days-left">{daysDiff(projectData.startDate)}</Row>
            <Row id="budget" className="mt-2">
              1000$ - 2000$
            </Row>
            <Row id="bid-form" className="mt-2">
              <section id="bid-header">
                <h4 className="text-muted">Bid On This Task!</h4>
              </section>
              <article id="bid-controls" className="mt-5">
                <FormGroup style={{ backgroundColor: "" }}>
                  <h5>
                    <span className="text-muted">Set You'r Minimal</span> Rate
                  </h5>
                  <Label for="exampleRange">0$ - {range}$</Label>
                  <Input
                    id="exampleRange"
                    max={1000}
                    min={0}
                    name="range"
                    type="range"
                    value={range}
                    onChange={handleBudgetRange}
                  />
                </FormGroup>
                <h5>
                  <span className="text-muted">Set You'r </span> delivery time
                </h5>
                <Row className="mt-4">
                  <Col md="6">
                    <InputGroup>
                      <Button color="primary">-</Button>
                      <Input placeholder="" className="text-center" />
                      <Button color="primary">+</Button>
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input id="exampleSelect" name="select" type="select">
                        <option>Days</option>
                        <option>Months</option>
                        <option>Year</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </article>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TaskDescription;
