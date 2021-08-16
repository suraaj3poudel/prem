import React from 'react';
import "./Header.css";
import logo from "./images/logo.PNG"

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="pl logo"></img>
            <h4>#NoRoomForRacism</h4>
        </div>
    )
}

export default Header
