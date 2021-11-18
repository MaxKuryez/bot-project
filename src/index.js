import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SignIn from "./Components/SignIn/SignIn"
import BinanceSignIn from './Components/BinanceSignIn/BinanceSignIn';

ReactDOM.render(
  <React.StrictMode>
    <BinanceSignIn/>
  </React.StrictMode>,
  document.getElementById('root')
);

