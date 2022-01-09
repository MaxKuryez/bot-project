import React, { useState, useEffect } from 'react';
import jquery from 'jquery';
import { useNavigate } from 'react-router-dom';
import './MyAccount.scss';
import AccountStockChart from './AccountStockChart';
import db from './Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

  let loginradius = {};
  const lrconfig = {
    apiKey: process.env.REACT_APP_API_KEY, //LoginRadius API key
  };

function MyAccount() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

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
                fetchUserData();
              },
              (errors) => {
                console.log(errors);
                localStorage.setItem('user_email', '');
                localStorage.setItem('user_token', '');
                localStorage.setItem('Uid', '');
                navigate('/signin');
                window.location.reload(false);
              }
          );
      }
    });
  }, []);


  function fetchUserData() {
      const userDataTemp = {};
      const Uid = localStorage.getItem('Uid')
      const q = query(collection(db, 'account'), where('Uid', "==", Uid));
      const querySnapshot = getDocs(q)
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          userDataTemp.Uid = doc.data().Uid;
          userDataTemp.email = doc.data().email;
          userDataTemp.name = doc.data().name;
          setUserData(userDataTemp);
          console.log(doc.id, " => ", doc.data());
        });
      });
  }

  if (userData.name) {
    return (
      <div className="my-account">
        <h1>Hi {userData.name}, this is your account!</h1>
        <AccountStockChart/>
      </div>
    );
  }

  return (null);
}

export default MyAccount;
