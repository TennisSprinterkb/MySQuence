import React, {Component} from 'react';


class InstForm extends Component {

    constructor() {
        super()
            
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
    },()=>console.log(this.state.usename))
}

handleSubmit(event) {
    event.preventDefault()
    fetch("/getData")
    //.then((response) => {response.json()})
    .then((res) => {console.log(res) });
    console.log(this.state.username)
    // get data
  fetch("/api/login", {
    method:'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
        userName:this.state.username,
        passwordHash: this.state.password,
    isTeacher: true,
    certificationNumber: this.state.certificate,
    emailAddress: this.state.email
})
  })
  .then((response) => response.json())
  .then((res) => {console.log(res) });
    

    
}

    
render() {
    return(
        <div className="row">
            <form className="col s12 center-align main">
                <div class="row">
                    <div className="col s12"><h4 className="heading center-align">Instructor Sign-Up</h4></div>
                </div>	
                    
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        name ="username"
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

                        type="password"
                        name="password"
                        id="Password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                        </input>
                        <label for="Password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 

                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                        </input>
                        <label for="Password">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 

                        type="text"
                        name="certificate"
                        id="certificate"
                        value={this.state.certificate}
                        onChange={this.handleChange}>
                        </input>
                        <label for="certificate">Certificate Number</label>
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

export default InstForm;

