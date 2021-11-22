import React from 'react';

const Coin = ({
  name,
  price,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <h1>{name}</h1>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;