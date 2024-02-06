// En NavBar.jsx
import React, { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../../App";
import PositionedMenu from "../PositionedMenu/PositionedMenu";

const NavBar = ({ onToggleDarkMode, darkMode, cartItemCount }) => {
    return (
        <nav className="NavBar">
            <ul className="nav-ul">
                <li className="li"><Link to="/">Home</Link></li>
                <li> {<PositionedMenu />}</li>
                <li className="li"><Link to="/Contact">Contact</Link></li>
                <li className="Nav"><CartWidget itemCount={cartItemCount} /></li>
                <li className="Switch" style={{ marginTop: '10px' }}>
                    <MaterialUISwitch checked={darkMode} onChange={onToggleDarkMode} />
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;
