import React,{useState} from "react";
import Login from "./Login";
import Registration from "./Registration";
import "../css/style.css";
import "../css/colors/blue.css";
import "../css/myStyle.css"


function RegistrationContainer() {

    return (
      <React.Fragment>
          <div id="sign-in-dialog" className="RegistrationPopup">
        

            <div className="sign-in-form">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example">
                <button
                  type="button"
                  className="btn btn-primary regButton">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-primary regButton"
                >
                  Registration
                </button>
              </div>
              <div className="popup-tabs-container">
                <Login></Login>
                <Registration></Registration>
              </div>
            </div>
          </div>

      </React.Fragment>
    );
}

export default RegistrationContainer
