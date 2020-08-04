import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;