import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import HomePage from "./pages/Home.page";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
