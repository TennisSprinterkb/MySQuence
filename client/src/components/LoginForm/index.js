import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import "./style.css"

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            // username: '',
            // password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="row">
                    {/* <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img> */}
                    <form className="col s12">
                        <div className="col s8"><h6 className="heading">Login</h6></div>
                            <div className="row">
                                <div className="input-field col s8">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input 
                                    // placeholder="Username"
                                    type="text"
                                    id="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}>
                                    </input>
                                    <label for="Username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s8">
                                    <i class="material-icons prefix">lock</i>
                                    <input 
                                    // placeholder="Password"
                                    type="password"
                                    id="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}>
                                    </input>
                                    <label for="Password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <button 
                                className="btn waves-effect waves-dark text-darken-2 card-panel" 
                                type="submit" 
                                onClick={this.handleSubmit}
                                name="action">Submit
                                </button>
                            </div>
                    </form>
                </div>
              
                
     
            )
        }
    }
}

export default LoginForm