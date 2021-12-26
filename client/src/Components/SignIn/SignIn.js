import React, { useState } from "react";
import jquery from 'jquery';
import './SignIn.scss';
import { useNavigate } from 'react-router-dom';

const lrconfig = {
  apiKey: process.env.REACT_APP_API_KEY, //LoginRadius API key
};

let loginradius = {};

const LoginButton = () => {
  const navigate = useNavigate();

  jquery(window).on('load', function() {
    if (window.LoginRadiusV2) {
      loginradius = new window.LoginRadiusV2(lrconfig);
      loginradius.api.init(lrconfig);
    }
  });

  const loginButtonHandler = () => {

    if (loginradius && loginradius.api) {
      loginradius.api.login({
        emailid: emailValue,
        password: passwordValue
      },
      (successResponse) => {
        //Here you will get the access Token of 
        console.log(successResponse);
        localStorage.setItem('user_token', successResponse.Profile.Email[0].Value);
        console.log(localStorage.user_token);
        console.log(successResponse.Profile.Email[0]);
        navigate('/myaccount');
      },
      (errors) => {
        console.log(errors);
      });
    }
  }

  const [emailValue, updateEmailValue] = useState("");
  const [passwordValue, updatePasswordValue] = useState("");

  return (
    <>
      <div className="form-container-signin">
        <div id="signin">
          <div className="signin-input">
            <div className="signin-labels">
              <p>Email:</p>
              <p>Passowrd:</p>
            </div>
            <div className="signin-fields">
              <input type="text"
                value={emailValue}
                onChange={(e) => { updateEmailValue(e.target.value) }}
                placeholder={"email"}
                name="email"
                type="text"
                maxLength="20"/>
              <input type="password"
                value={passwordValue}
                onChange={(e) => { updatePasswordValue(e.target.value) }}
                placeholder={"Password"}
                name="passowrd"
                type="text"
                maxLength="20"/>
            </div>
          </div>
          <br />
          <div className="sigin-submit">
            <button onClick={() => loginButtonHandler()}>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginButton;