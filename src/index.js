import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SignIn from "./Components/SignIn/SignIn"
import BinanceApi from './Components/BinanceSignIn/BinanceApi';

ReactDOM.render(
  <React.StrictMode>
    <BinanceApi/>
  </React.StrictMode>,
  document.getElementById('root')
);

