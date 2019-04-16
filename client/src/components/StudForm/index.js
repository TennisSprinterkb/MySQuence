import React, {Component} from 'react';
import axios from 'axios';
import "./style.css";

class studForm extends Component {
render() {
    return(
        <form className="col s12 center-align studForm">
    <div className="row">
        <div className="input-field col s8">
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
        <div className="col s8 center-align">
            <button 
            className="btn waves-effect waves-dark text-darken-2 card-panel" 
            type="submit" 
            onClick={this.handleSubmit}
            name="action">Submit
            </button>
        </div>
    </div>
</form> 

    )
}

}
export default studForm;