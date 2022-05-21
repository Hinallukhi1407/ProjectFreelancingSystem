import React from "react";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Guest from "./Pages/Guest/Index.jsx";
import Employer from "./Pages/Employer/Index.jsx";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import Freelancer from "./Pages/Freelancer";
import IntroBanner from "./Component/Employeer/IntroBanner";
import GuestIntroBanner from "./Component/Guest/IntroBanner";
import ListFreelancer from "./Component/Employeer/ListFreelancer";
import ProfileDescription from "./Component/Employeer/ProfileDescription";
import PostProject from "./Component/Employeer/PostProject";
import FindProject from "./Component/Freelancer/FindProject";
import TaskList from "./Component/Freelancer/TaskList";
import TaskDescription from "./Component/Freelancer/TaskDescription";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Guest />} />
          <Route path="Employer" element={<Employer />}>
            <Route path="Home" element={<IntroBanner />} />
            <Route path="freelancerlist" element={<ListFreelancer />}/>
            <Route path="freelancerlist/profiledesc" element={<ProfileDescription/>}/>
            <Route path="postproject" element={<PostProject/>}/>
          </Route>
          <Route path="/freelancer" element={<Freelancer />} >
             <Route path="Home" element={<GuestIntroBanner />} />
             <Route path="browseproject" element={<FindProject/>}/>
             <Route path="browseproject/tasklist" element={<TaskList/>}/>
             <Route path="browseproject/tasklist/taskdescription" element={<TaskDescription/>}/>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
