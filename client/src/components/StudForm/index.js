import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import axios from 'axios';
import "./style.css";

class StudForm extends Component {

    constructor(props) {
        super(props)
            
    this.state = {
        username: '',
        password: '',
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

    event.preventDefault()
   
    // get data
  fetch("/api/signup", {
    method:'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
        userName:this.state.username,
        passwordHash: this.state.password,
        emailAddress: this.state.email,
        isTeacher: false,
        certificationNumber: null
    })
  })
//   .then((response) => response.json())
  .then((res) => {console.log(res) });
  this.props.history.push('/login')
    

    
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
                        name="username"
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
                    
                        name="password"
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
                        name="email"
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
export default withRouter(StudForm)