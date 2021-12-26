import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routs from './View/Routs'
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script type="text/javascript" src="https://auth.lrcontent.com/v2/LoginRadiusV2.js"></script>
      <script type="text/javascript" src="./Configurations/sign-in-api-key.js"></script>
    </Helmet>
    <Routs/>
  </React.StrictMode>,
  document.getElementById('root')
);

