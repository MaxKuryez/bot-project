import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import BinanceChartApi from '../Components/BinanceChartApi/BinanceChartApi';
import CoinSearch from '../Components/CoinSearch/CoinSearch';
import SignIn from '../Components/SignIn/SignIn';
import MyAccount from '../Components/MyAccount/MyAccount';
import SignOutButton from '../Components/SignOutButton/SignOutButton';

export default function Routs() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          { !localStorage.getItem('user_token') ?
            <><li><a href="/signin">Signin</a></li></> :
            <><li><a href="/myaccount">MyAccount</a></li></>
          }
          <li>
            <SignOutButton/>
          </li>
        </ul>

        <Routes>
          <Route path="/watch-coin" element={<WatchCoin />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/myaccount" element={<Myaccount />} />
        </Routes>
      </div>
    </Router>
  );
}

function WatchCoin() {
  return (
    <div>
      <BinanceChartApi/>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <CoinSearch/>
    </div>
  );
}

function Signin() {
  return (
    <SignIn/>
  );
}

function Myaccount() {
  return (
    <div>
      <MyAccount/>
    </div>
  );
}
