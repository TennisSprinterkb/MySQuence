import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../LoginForm";
import Signup from "../Signup";
import LandingPage from "../LandingPage";
import "./style.css";




class Home extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div>


=======

      <div>
>>>>>>> 67ae2941c46de5e3ea065de8265bc862552a6e87
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
<<<<<<< HEAD
          


=======
>>>>>>> 67ae2941c46de5e3ea065de8265bc862552a6e87
          </Switch>
        </Router>
      </div>

    );
  }
}

export default Home;
