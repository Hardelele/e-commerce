import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home.page";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
