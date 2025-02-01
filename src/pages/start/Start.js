import React from 'react';

import Logo from '../../pictures/LogoBlack.png';
import Loading from '../../pictures/Loading.gif';

import './Start.css';

export default function Start() {
    return (
        <div className="start-body">
            <div className="start-loading">
                <img src={Logo} alt="Logo" id="logo" />
                <img src={Loading} alt="Loading" id="loading" />
            </div>
        </div>
      )
}
