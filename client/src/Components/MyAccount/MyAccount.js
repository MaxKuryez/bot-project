import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyAccount.scss';
import SignIn from '../SignIn/SignIn';

function MyAccount() {
  const [user, setUser] = useState();
  console.log('here: ' + localStorage.user_token);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user_token');
    if (loggedInUser) {
      console.log('Setting user');
      setUser(loggedInUser);
    }
  }, []);

  console.log('Rendering component');

  if (user) {
    return (
      <div className='my-account'>
        <h1>Hi {user}, this is your account!</h1>
      </div>
    );
  }

  return (
    <SignIn/>
  );

}

export default MyAccount;