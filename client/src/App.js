import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import Signup from "../src/components/Signup";
import LoginInput from "../src/components/Login";
import StudForm from "../src/components/StudForm";
import InstForm from "./components/InstForm";
import AsanaCard from "./components/AsanaCard";
import Mapbox from "./components/Mapbox";



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

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }


  render() {
    return (
      <div class="background">
        <div class="container">
          <div className="center-align">
            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>

            <Router>
              <Switch>
                <Route
                  exact path="/"
                  render={() =>
                    <LoginInput />}
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
                  exact path="/pose"
                  render={() =>
                    <AsanaCard />}
                />

              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
