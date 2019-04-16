import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from "../LoginForm";
import Signup from "../Signup";
import LoginInput from "../Login";
import "./style.css";
// import Land from "../Land"


class Home extends React.Component {
    render() {
        return (
          <div class="background">
            <div class="container">
              <Route
                  path="/"
                  render={() =>
                    <LoginInput />}
                />
                <Route
                  path="/login"
                  render={() =>
                    <LoginForm
                      updateUser={this.updateUser}
                    />}
                />
                <Route
                  path="/signup"
                  render={() =>
                    <Signup/>}
                />  
            </div>
          </div>
        )
    }
}

export default Home;
