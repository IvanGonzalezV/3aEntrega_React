import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../../App";

const NavBar = ({ onToggleDarkMode, darkMode }) => {
    return (
        <nav className="NavBar">
            <ul className="nav-ul">
                <li className="li"><Link to="/">Home</Link></li>
                <li className="li"><Link to="/Categories">Categories</Link></li>
                <li className="li"><Link to="/Contact">Contact</Link></li>
                <li className="Nav"><CartWidget /></li>
                <li className="Switch" style={{ marginTop: '-10px' }}>
                    <MaterialUISwitch checked={darkMode} onChange={onToggleDarkMode} />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
