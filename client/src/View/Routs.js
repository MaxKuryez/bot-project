import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import BinanceChartApi from '../Components/BinanceChartApi/BinanceChartApi';
import CoinSearch from '../Components/CoinSearch/CoinSearch';

export default function Routs() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/btc">BTC</Link>
          </li>
          <li>
            <Link to="/eth">ETH</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/:symbolId" element={<Child />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { symbolId } = useParams();

  return (
    <div>
      <h3>ID: {symbolId}</h3>
      <BinanceChartApi symbol={symbolId}/>
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
