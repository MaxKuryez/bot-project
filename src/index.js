import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BinanceChartApi from './Components/BinanceChartApi/BinanceChartApi';

ReactDOM.render(
  <React.StrictMode>
    <BinanceChartApi/>
  </React.StrictMode>,
  document.getElementById('root')
);

