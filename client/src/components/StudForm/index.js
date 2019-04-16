import React, {Component} from 'react';
import axios from 'axios';
import "./style.css";

class StudForm extends Component {

    constructor(props) {
        super(props)
            
    this.state = {
        // username: '',
        // password: '',
        confirmPassword: '',

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
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault()

    //request to server to add a new username/password
    axios.post('/user/', {
        username: this.state.username,
        password: this.state.password, 
        email: this.state.email
    })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')
                this.setState({ //redirect to login page
                    redirectTo: '/login'
                })
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })

    
}


    
render() {
    return(
        <div className="row">
            <form className="col s12 center-align main">
                <div class="row">
                    <div className="col s12"><h4 className="heading center-align">Student Sign-Up</h4></div>
                </div>	
                    
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        // placeholder="Username"
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}>
                        </input>
                        <label for="username">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        // placeholder="Password"
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                        </input>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        // placeholder="Password"
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                        </input>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <button 
                        className="btn waves-effect waves-dark text-darken-2 card-panel" 
                        type="submit" 
                        onClick={this.handleSubmit}
                        name="action">Submit
                        </button>
                    </div>
                </div>
            </form> 
        </div>

    )
}

}
export default StudForm;