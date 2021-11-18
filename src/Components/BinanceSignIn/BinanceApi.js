import React, { useState, useEffect } from 'react';
import './BinanceSignIn.scss'
import axios from 'axios';

function BinanceApi(props) {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins (res.data);
      //console.log(res.data);
    })
  })

  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

export default BinanceApi;