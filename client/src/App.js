import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron><h1>(React) Google Books Search</h1>
          <h1>Search for and Save Books of Interest</h1></Jumbotron>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
        
      </div>
    </Router>
  );
}

export default App;
