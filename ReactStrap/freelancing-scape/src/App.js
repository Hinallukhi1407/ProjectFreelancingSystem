import React from 'react';
import NavBar from './Component/Guest/NavBar';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroBanner from './Component/Guest/IntroBanner';
function App() {
  return (
  <React.Fragment>
    <NavBar/>
    <IntroBanner/>
  </React.Fragment>
  );
}

export default App;
