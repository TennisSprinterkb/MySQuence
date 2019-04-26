import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import "./style.css"

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
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
        console.log(this.state.username)

        fetch("/api/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then(response => response.json()
            .then (response => {console.log(JSON.stringify(response))
                
                let Teach = response.dbUser.isTeacher
                let UserId = response.dbUser.id

                localStorage.setItem("UserId", UserId);

            console.log(Teach)
                
            if(Teach) {
                this.setState({
                    
                      redirectTo: '/instpage'
                
                    })
            } else {
                this.setState({
                    redirectTo: '/studpage'
                })
            }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
        )}
    



        render() {
            if (this.state.redirectTo) {
                return <Redirect to={{ pathname: this.state.redirectTo }} />
            } else {
                return (
                    <div className="container">
                        <div className="center-align">
                            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
                            <div className="row">
                                <form className="col s12 center-align main">
                                    <div className="row">
                                        <div className="col s12"><h4 className="heading center-align">Login</h4></div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}>
                                            </input>
                                            <label for="username">Username</label>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">lock</i>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}>
                                            </input>
                                            <label for="password">Password</label>
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
                        </div>
                    </div>




                )
            }
        }
    }

export default withRouter(LoginForm)
