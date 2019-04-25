import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InstPage from '../src/components/InstPage';
import StudPage from '../src/components/StudPage';
import LandingPage from "../src/components/LandingPage";
import Mapbox from "../src/components/Mapbox";
import LoginForm from "../src/components/LoginForm";
import Signup from "../src/components/Signup";
import AsanaPage from "../src/components/AsanaPage";
import SelectedPage from "../src/components/SelectedPage";
import BreathePage from "../src/components/BreathePage";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

 
    this.updateUser = this.updateUser.bind(this)
  }

 

  updateUser(User) {
    this.setState(User)
  }


  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route
              exact path="/"
              render={() =>
                <LandingPage />}
            />
            <Route
              exact path="/login"
              render={() =>
                <LoginForm
                  updateUser={this.updateUser}
                />}
            />
            <Route
              exact path="/signup"
              render={() =>
                <Signup />}
            />
            <Route
              exact path="/map"
              render={() =>
                <Mapbox />}
            />

            <Route
              exact path="/asana"
              render={() =>
                <AsanaPage />}
            />

            <Route
              exact path="/selected"
              render={() =>
                <SelectedPage />}
            />
            <Route
              exact path="/breathe"
              render={() =>
                <BreathePage />}
            />
            <Route
              exact path="/instpage"
              render={() =>
                <InstPage />}
            />
            <Route
              exact path="/studpage"
              render={() =>
                <StudPage />}
            />

          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
