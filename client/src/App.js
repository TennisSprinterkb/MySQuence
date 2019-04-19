import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/Home";
// import Signup from "../src/components/Signup";
// import LoginInput from "../src/components/Login";
//import AsanaCard from "../src/components/AsanaCard";
import Mapbox from "../src/components/Mapbox";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  // componentDidMount() {
  //   this.getUser()
  // }

  updateUser(userObject) {
    this.setState(userObject)
  }


  render() {
    return (
      <div>
            <Router>
              <Switch>
                <Route
                  exact path="/"
                  render={() =>
                    <Home />}
                />
                <Route
                  exact path="/map"
                  render={() =>
                    <Mapbox />}
                />


              </Switch>
            </Router>
         
      </div>
    );
  }
}

export default App;
