import React, { useState, useEffect } from 'react';
import jquery from 'jquery';
import { useNavigate } from 'react-router-dom';
import './MyAccount.scss';
import SignIn from '../SignIn/SignIn';

  let loginradius = {};
  const lrconfig = {
    apiKey: process.env.REACT_APP_API_KEY, //LoginRadius API key
  };

function MyAccount() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user_email');
    const userToken = localStorage.getItem('user_token');

    jquery(window).on('load', function() {
      if (window.LoginRadiusV2) {
        loginradius = new window.LoginRadiusV2(lrconfig);
        loginradius.api.init(lrconfig);
      }

      if (loginradius && loginradius.api) {
          loginradius.api.validateToken(
            userToken,
              (successResponse)=>{
                console.log(successResponse);
                if (loggedInUser) {
                  setUser(loggedInUser);
                }
              },
              (errors) => {
                console.log(errors);
                localStorage.setItem('user_email', '');
                localStorage.setItem('user_token', '');
                navigate('/signin');
                window.location.reload(false);
              }
          );
      }
    });
  }, []);

  if (user) {
    return (
      <div className='my-account'>
        <h1>Hi {user}, this is your account!</h1>
      </div>
    );
  }

  return (null);

}

export default MyAccount;