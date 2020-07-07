import React, {useState} from "react";
import './user-menu.css';
import ExpandButton from "./expand/Expand.button";

function UserMenu() {

    const [isVisible, setVisibility] = useState(false);

    function changeVisibility() {
        setVisibility(prevState => !prevState);
    }

    return (
        <div className="user-menu-wrapper">
            <ExpandButton onClick={changeVisibility}/>
            {isVisible &&
            <div className="user-menu">
                <div className="menu-link">Profile</div>
                <div className="menu-link">Orders</div>
                <div className="menu-link">Settings</div>
                <div className="menu-link">Sign-out</div>
            </div>}
        </div>
    );
}

export default UserMenu;
