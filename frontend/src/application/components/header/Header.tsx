import React from "react";
import './header.css';
import HeaderLogo from "./logo/Header.logo";
import Search from "./search/Search";
import CartButton from "./cart/Cart.button";
import UserMenu from "./user/menu/UserMenu";

function Header() {
    return (
        <div className="header">
            <HeaderLogo/>
            <Search/>
            <CartButton/>
            <UserMenu/>
        </div>
    );
}

export default Header;
