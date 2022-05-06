import React from 'react';
import "../css/style.css";
import "../css/colors/blue.css";
function Registration() {
    return (
      <React.Fragment>
        <div className="popup-tab-content" id="register">
          {/* Welcome Text */}
          <div className="welcome-text">
            <h3>Let's create your account!</h3>
          </div>
          {/* Account Type */}
          <div className="account-type">
            <div>
              <input
                type="radio"
                name="account-type-radio"
                id="freelancer-radio"
                className="account-type-radio"
                defaultChecked
              />
              <label htmlFor="freelancer-radio" className="ripple-effect-dark">
                <i className="icon-material-outline-account-circle" />{" "}
                Freelancer
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="account-type-radio"
                id="employer-radio"
                className="account-type-radio"
              />
              <label htmlFor="employer-radio" className="ripple-effect-dark">
                <i className="icon-material-outline-business-center" /> Employer
              </label>
            </div>
          </div>
          {/* Form */}
          <form method="post" id="register-account-form">
            <div className="input-with-icon-left">
              <i className="icon-material-baseline-mail-outline" />
              <input
                type="text"
                className="input-text with-border"
                name="emailaddress-register"
                id="emailaddress-register"
                placeholder="Email Address"
                required
              />
            </div>
            <div
              className="input-with-icon-left"
              title="Should be at least 8 characters long"
              data-tippy-placement="bottom"
            >
              <i className="icon-material-outline-lock" />
              <input
                type="password"
                className="input-text with-border"
                name="password-register"
                id="password-register"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-with-icon-left">
              <i className="icon-material-outline-lock" />
              <input
                type="password"
                className="input-text with-border"
                name="password-repeat-register"
                id="password-repeat-register"
                placeholder="Repeat Password"
                required
              />
            </div>
          </form>
          {/* Button */}
          <button
            className="margin-top-10 button full-width button-sliding-icon ripple-effect"
            type="submit"
            form="register-account-form"
          >
            Register <i className="icon-material-outline-arrow-right-alt" />
          </button>
          {/* Social Login */}
          <div className="social-login-separator">
            <span>or</span>
          </div>
          <div className="social-login-buttons">
            <button className="facebook-login ripple-effect">
              <i className="icon-brand-facebook-f" /> Register via Facebook
            </button>
            <button className="google-login ripple-effect">
              <i className="icon-brand-google-plus-g" /> Register via Google+
            </button>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Registration;