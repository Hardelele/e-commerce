import React from "react";
import './expand.button.css';
import UserIcon from "../../icon/UserIcon";

function ExpandButton() {
    return (
        <div className="expand-button">
            <div className="user-icon-wrapper">
                <UserIcon/>
            </div>
            <div className="expand-down-image"/>
        </div>
    );
}

export default ExpandButton;
