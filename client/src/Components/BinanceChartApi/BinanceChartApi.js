import React, { useState, useEffect } from 'react';
import './BinanceChartApi.scss'
import axios from 'axios';
import BinanceHistory from './BinanceHistory';

function BinanceChartApi(coin) {

  const [history, setHistory] = useState([]);
  const symbol = coin.symbol.slice(6).toUpperCase();

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
            price={Number(bid[0]).toFixed(2)}
            amount={Number(bid[1]).toFixed(5)}
          />);
        })}
      </div>
      <div className='sell-chart ask'>
        <h1>Ask</h1>
        {history.asks && history.asks.slice(0,10).map(bid => {
          return (<BinanceHistory
            isBid={0}
            price={Number(bid[0]).toFixed(2)}
            amount={Number(bid[1]).toFixed(5)}
          />);
        })}
      </div>
    </div>
  );
}

export default BinanceChartApi;