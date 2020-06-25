import React from "react";
import './expand.button.css';
import UserIcon from "../../../../user/icon/UserIcon";

const ExpandButton: React.FC<{onClick():void}> = (props) => {
    return (
        <div
            className="expand-button"
            onClick={props.onClick}
        >
            <div className="user-icon-wrapper">
                <UserIcon/>
            </div>
            <div className="expand-down-image"/>
        </div>
    );
}

export default ExpandButton;
