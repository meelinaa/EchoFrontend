import React from 'react';

import Logo from '../../pictures/LogoBlack.png';
import Konto from '../../pictures/Konto.png';

import './header.css';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate();

    return (
        <div className="body-layout">
            <header>
                <div className="header-links">
                    <img src={Logo} alt="logo" id="header-img" onClick={() => navigate("/")} />
                </div>
                <div className="header-mitte">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/analyse">Analyse</NavLink>
                </div>
                <div className="header-rechts">
                    <img src={Konto} alt="konto" id="header-img" onClick={() => navigate("/konto")} />
                </div>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}
