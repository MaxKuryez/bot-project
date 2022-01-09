import React from 'react';
import Routs from '../../View/Routs';
import { Link } from "react-router-dom";

const Coin = ({
  name,
  price,
}) => {
  return (
    <div className='coin-container'>
      <Link to={'/watch-coin?symbol=' + name}>
      <div className='coin-row'>
        <div className='coin'>
          <h1>{name}</h1>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>{price}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Coin;