import React, { Component } from 'react';
import './BinanceSignIn.scss'

const BinanceBids = ({
  price,
  amount,
  }) => {
  return (
    <div>
      <p>{price}</p>
      <p>{amount}</p>
    </div>
  );
}

export default BinanceBids;