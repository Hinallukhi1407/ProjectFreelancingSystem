import React from "react";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Guest from "./Component/Guest/Guest";
import Employeer from "./Component/Employeer/Employeer";
import { Route, Link, Routes,BrowserRouter as  Router } from "react-router-dom";
import Freelancer from "./Pages/Freelancer";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Guest />}/>
          <Route path="/Employeer" element={<Employeer />}/>
          <Route path="/Guest" element={<Guest />}/>
          <Route path="/freelancer" element={<Freelancer />} />
        </Routes>
      </Router>
      {/* <Guest />
      <Employeer /> */}
    </React.Fragment>
  );
}

export default App;
