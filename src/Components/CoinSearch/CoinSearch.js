//https://api.binance.com/api/v3/ticker/price - just load whole file (or find a way to make it weigh less)
//https://api.binance.com/api/v3/exchangeInfo?symbol=BNBBTC - with limits, file too big
//TradingView - api for view

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './CoinSearch.scss';

function CoinSearch() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.binance.com/api/v3/ticker/price'
      )
      .then(res => {
        setCoins(res.data);
        //console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = searchForCoin(coins);

  function searchForCoin(coins) {
    let results = [];
    Array.isArray(coins) && coins.forEach(function (coin, index) {
      if (coin && typeof coin.symbol === 'string' && coin.symbol.toLowerCase().includes(search.toLowerCase())) {
        if ( coin.symbol.startsWith(search) ) {
          results.unshift(coin);
        } else {
          results.push(coin);
        }
      }
    });
    //console.log(results);
    return results;
  }

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.length ? (<>
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
              <h1>NAME</h1>
            </div>
            <div className='coin-data'>
              <p className='coin-price'>PRICE</p>
            </div>
          </div>
        </div>
      {filteredCoins.slice(0, 20).map(coin => {
        return (
          <Coin
            name={coin.symbol}
            price={coin.price}
          />
        );
      })} </>) : <><div>No results</div></> }
    </div>
  );
}

export default CoinSearch;