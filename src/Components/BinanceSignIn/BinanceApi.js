import React, { useState, useEffect } from 'react';
import './BinanceSignIn.scss'
import axios from 'axios';
import BinanceBids from './BinanceBids';

function BinanceApi() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(
          'https://api.binance.com/api/v3/depth?symbol=BTCUSDT')
        .then(res => {
          setHistory(res.data);
          console.log(res.data);
        }).catch(error => console.log(error));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='price-change'>
      <div>
        <h1>Bid</h1>
        {history.bids && history.bids.slice(0,10).map(bid => {
          return (<BinanceBids
            price={Number(bid[0]).toFixed(2)}
            amount={Number(bid[1]).toFixed(5)}
          />);
        })}
      </div>
      <div>
        <h1>Ask</h1>
        {history.asks && history.asks.slice(0,10).map(bid => {
          return (<BinanceBids
            price={Number(bid[0]).toFixed(2)}
            amount={Number(bid[1]).toFixed(5)}
          />);
        })}
      </div>
    </div>
  );
}

export default BinanceApi;