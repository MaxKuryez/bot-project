import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './BinanceChartApi.scss'
import axios from 'axios';
import BinanceHistory from './BinanceHistory';

function BinanceChartApi() {

  const [history, setHistory] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const symbol = queryParams.get('symbol');
  console.log(symbol);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(
          'https://api.binance.com/api/v3/depth?symbol=' + symbol)
        .then(res => {
          setHistory(res.data);
          console.log(res.data);
        }).catch(error => console.log(error));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sell-history'>
      <h1 className='currency-name'>{symbol}</h1>
      <div className='sell-chart bid'>
        <h1>Bid</h1>
        {history.bids && history.bids.slice(0,10).map(bid => {
          return (<BinanceHistory
            isBid={1}
            price={bid[0].replace(/(\.0+|0+)$/, '')}
            amount={Number(bid[1]).toFixed(5)}
          />);
        })}
      </div>
      <div className='sell-chart ask'>
        <h1>Ask</h1>
        {history.asks && history.asks.slice(0,10).map(ask => {
          return (<BinanceHistory
            isBid={0}
            price={ask[0].replace(/(\.0+|0+)$/, '')}
            amount={Number(ask[1]).toFixed(5)}
          />);
        })}
      </div>
    </div>
  );
}

export default BinanceChartApi;