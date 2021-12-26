import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routs from './View/Routs'
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script type="text/javascript" src="https://auth.lrcontent.com/v2/LoginRadiusV2.js"></script>
    </Helmet>
    <Routs/>
  </React.StrictMode>,
  document.getElementById('root')
);

