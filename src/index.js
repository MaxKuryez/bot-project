import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BinanceChartApi from './Components/BinanceChartApi/BinanceChartApi';
import CoinSearch from './Components/CoinSearch/CoinSearch';

ReactDOM.render(
  <React.StrictMode>
    <CoinSearch/>
  </React.StrictMode>,
  document.getElementById('root')
);

