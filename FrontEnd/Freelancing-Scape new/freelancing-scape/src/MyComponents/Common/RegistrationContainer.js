import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import "../css/style.css";
import "../css/colors/blue.css";
import "../css/myStyle.css";
import { AiOutlineCloseSquare } from "react-icons/ai";

function RegistrationContainer({ setModel }) {
  const [formName, setFormName] = useState("Login");

  const handleClickFormName = (e) => {
    // console.log(e.target.name)
    if (e.target.name == "btnLogin") {
      setFormName("Login");
    } else if (e.target.name == "btnRegistration") {
      setFormName("Registration");
    }
    console.log(formName);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row-cols-auto">
          <div id="sign-in-dialog" className="">
            <div className="sign-in-form">
              <button onClick={() => setModel(false)}>
                <AiOutlineCloseSquare className="regCloseIcon"></AiOutlineCloseSquare>
              </button>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={handleClickFormName}
                  name="btnLogin"
                  type="button"
                  className="btn btn-primary regButton"
                >
                  Login
                </button>
                <button
                  onClick={handleClickFormName}
                  name="btnRegistration"
                  type="button"
                  className="btn btn-primary regButton"
                >
                  Registration
                </button>
              </div>
              <div className="popup-tabs-container">
                {formName == "Login" && <Login></Login>}
                {formName == "Registration" && <Registration></Registration>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegistrationContainer;
