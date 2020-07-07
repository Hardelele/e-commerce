import React from "react";
import './header.logo.css';
import {NavLink} from "react-router-dom";

function HeaderLogo() {
    return (
        <NavLink className="header-logo" to="/">Russian Honey</NavLink>
    );
}

export default HeaderLogo;
