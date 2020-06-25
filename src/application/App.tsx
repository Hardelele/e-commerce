import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
