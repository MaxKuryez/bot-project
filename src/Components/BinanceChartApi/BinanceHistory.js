import React, { Component } from 'react';
import './BinanceChartApi.scss'

const BinanceHistory = ({
  isBid,
  price,
  amount,
  }) => {
  return (
    <div className='bid-container'>
      {isBid ? ( <><div className='bid-container__amount'>{amount}</div><div className='bid-container__price'>{price}</div></>) :
      ( <><div className='bid-container__price'>{price}</div><div className='bid-container__amount'>{amount}</div></> )}
    </div>
  );
}

export default BinanceHistory;