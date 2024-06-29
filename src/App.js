import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Category from "./components/category";
import Home from "./components/home";
import SingleNews from "./components/single-news";

function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect from="/" to="/page-home" exact />
        <Route path="/page-home"  component={Home} exact/>
        <Route path="/category"  component={Category}/>
        <Route path="/single-news"  component={SingleNews}/>
      </Switch>
    </div>
  );
}

export default App;
