import React, { useState } from "react";
import jquery from 'jquery';
import './SignOutButton.scss';
import { useNavigate } from 'react-router-dom';

const lrconfig = {
  apiKey: process.env.REACT_APP_API_KEY, //LoginRadius API key
};

const token  = localStorage.getItem('user_token');
let loginradius = {};

const SignOutButton = () => {
  const navigate = useNavigate();

  jquery(window).on('load', function() {
    if (window.LoginRadiusV2) {
      loginradius = new window.LoginRadiusV2(lrconfig);
      loginradius.api.init(lrconfig);
    }
  });

  const logoutButtonHandler = () => {
    //Note: Call invalidate token api to invalidate the token.**
    if (loginradius && loginradius.api) {
    loginradius.api.invalidateToken(
      token,
        (successResponse)=>{
          console.log(successResponse);
        },
        (errors) => {
          console.log(errors);
        }
    );
    localStorage.setItem('user_email', '');
    localStorage.setItem('user_token', '');
    localStorage.setItem('Uid', '');
    window.location.reload(false);
    }
  }

  if (localStorage.getItem('user_token')){
    return (
      <React.Fragment>
     <button onClick={() => logoutButtonHandler()}>Logout</button>
     </React.Fragment>
     );
  }

  return (null);
};

export default SignOutButton;