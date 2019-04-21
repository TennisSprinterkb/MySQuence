import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InstPage from '../src/components/InstPage';
import StudPage from '../src/components/StudPage';
import Home from "../src/components/Home";
import Mapbox from "../src/components/Mapbox";
import AsanaPage from "../src/components/AsanaPage";
import SelectedPage from "../src/components/SelectedPage";

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
