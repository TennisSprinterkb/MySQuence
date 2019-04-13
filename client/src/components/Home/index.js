import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { createRequireFromPath } from 'module';
// import yoga from "../../components/images/yogaHome.jpg"
// import { url } from 'inspector';
// import LoginInput from "../Login"
import LoginForm from "../LoginForm";
import Signup from "../Signup"


class Home extends React.Component {
    render() {
        return (
            
            <div>

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
        )
    }
}

export default Home;
