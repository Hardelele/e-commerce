import React from 'react';
import Product from "../components/product/Product";
import './home.page.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default HomePage;
