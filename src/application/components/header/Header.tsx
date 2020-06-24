import React from "react";
import './header.css';
import HeaderLogo from "./logo/Header.logo";
import ExpandButton from "../user/buttons/expand/Expand.button";

function Header() {
    return (
        <div className="header">
            <HeaderLogo/>
            <ExpandButton/>
        </div>
    );
}

export default Header;
