import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import Category from "./components/category";
import Home from "./components/home";
import SingleNews from "./components/single-news";
import Header from "./components/Header";
import Footer from "./components/footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Redirect from="/" to="/page-home" exact />
        <Route path="/page-home"  component={Home} exact/>
        <Route path="/category"  component={Category}/>
        <Route path="/single-news"  component={SingleNews}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
