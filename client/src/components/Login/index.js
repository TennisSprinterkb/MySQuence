import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {withRouter} from 'react-router-dom'
import './style.css'
import LoginForm from '../LoginForm';



class LoginInput extends React.Component {

    constructor(props) {
        super(props)
    
        this.Login = this.Login.bind(this)
        this.Signup = this.Signup.bind(this)
      }

      Login() {
        this.props.history.push('/login')
      }

      Signup() {
        this.props.history.push('/signup')
      }
    // handleClickLogin = () => {
    //     this.context.router.push('/login');
    //   }

      render(){
    return (
        <div>
            <div className="center-align">
                    <div className="row">
                        <button onClick={this.Login}
                        className="btn waves-effect waves-dark text-darken-2 card-panel" 
                        type="submit" 
                       
                        name="action">Login
                        </button>
                        <button onClick={this.Signup}
                        className="btn waves-effect waves-dark text-darken-2 card-panel" 
                        type="submit" 
                 
                        name="action">Sign Up
                        </button>
                    </div>
                </div>

            </div>
        
    )
}
}

export default withRouter(LoginInput)