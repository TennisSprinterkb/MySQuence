import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../LoginForm";
import Signup from "../Signup";
import LandingPage from "../LandingPage";
import "./style.css";



class Home extends React.Component {
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
      


              </Switch>
            </Router>
          </div>
      
    );
  }
}

export default Home;
