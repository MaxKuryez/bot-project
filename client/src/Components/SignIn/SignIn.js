import React, { useEffect, useState } from 'react';
import './SignIn.scss';

function SignIn() {

  const [data, setData] = useState([{}]);

  useEffect (() => {
    fetch("/signin").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

    return (
      <div className="form-container-signin">
        <form id="signin">
          <div className="signin-input">
            <div className="signin-labels">
              <p>Email:</p>
              <p>Passowrd:</p>
            </div>
            <div className="signin-fields">
              <input
                name="email"
                type="text"
                maxLength="20" />
              <input
                name="passowrd"
                type="text"
                maxLength="20" />
            </div>
          </div>
          <br />
          <div className="sigin-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }


export default SignIn;
