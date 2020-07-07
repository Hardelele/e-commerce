import React from "react";
import './search.css'

function Search() {
    return (
        <div className="search">
            <div className="search-icon"/>
            <input
                className="search-input"
                placeholder="Product name..."
            />
        </div>
    );
}

export default Search;
