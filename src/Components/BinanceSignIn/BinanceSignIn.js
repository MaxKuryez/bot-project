import React, { Component } from 'react';
import BinanceApi from './BinanceApi';
import './BinanceSignIn.scss'

class BinanceSignIn extends Component {
    render() {
        return (
            <div>
                <BinanceApi/>
            </div>
        );
    }
}

export default BinanceSignIn;