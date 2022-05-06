import React from 'react';
import "../css/style.css";
import "../css/colors/blue.css";
function Login() {
  return (
    <React.Fragment>
      <div className="popup-tab-content" id="login">
        {/* Welcome Text */}
        <div className="welcome-text">
          <h3>We're glad to see you again!</h3>
          <span>
            Don't have an account?{" "}
            <a href="#" className="register-tab">
              Sign Up!
            </a>
          </span>
        </div>
        {/* Form */}
        <form method="post" id="login-form">
          <div className="input-with-icon-left">
            <i className="icon-material-baseline-mail-outline" />
            <input
              type="text"
              className="input-text with-border"
              name="emailaddress"
              id="emailaddress"
              placeholder="Email Address"
              required/>
          </div>
          <div className="input-with-icon-left">
            <i className="icon-material-outline-lock" />
            <input
              type="password"
              className="input-text with-border"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </form>
        {/* Button */}
        <button
          className="button full-width button-sliding-icon ripple-effect"
          type="submit"
          form="login-form"
        >
          Log In <i className="icon-material-outline-arrow-right-alt" />
        </button>
        {/* Social Login */}
        <div className="social-login-separator">
          <span>or</span>
        </div>
        <div className="social-login-buttons">
          <button className="facebook-login ripple-effect">
            <i className="icon-brand-facebook-f" /> Log In via Facebook
          </button>
          <button className="google-login ripple-effect">
            <i className="icon-brand-google-plus-g" /> Log In via Google+
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
