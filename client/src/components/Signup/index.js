import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import StudForm from "../StudForm";
import InstForm from "../InstForm";




class Signup extends Component {

constructor(props) {
			super(props)
				
		this.state = {
			// username: '',
			// password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.studForm = this.studForm.bind(this)
		this.instForm = this.instForm.bind(this)
	}
	
	
		  studForm() {
			this.props.history.push("/studForm")
		  }
	
		  instForm() {
			this.props.history.push("/instForm")
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
			password: this.state.password
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
	return (
		<div className="row">
				<form className="col s12 center-align main">
					<div class="row">
						<div className="col s12"><h4 className="heading center-align">Sign Up</h4></div>
					</div>	
					<div class="row">
						<div className="col s12 center-align">
							<button onClick={this.instForm}
							className="btn waves-effect waves-dark text-darken-2 card-panel" 
							type="submit" 
							
							name="action">Instructor
							</button>
							<button onClick={this.studForm}
							className="btn waves-effect waves-dark text-darken-2 card-panel" 
							type="submit" 
						
							name="action">Student
							</button>
						</div>
						</div>
					</form>
				</div>
	)
}
}

export default withRouter(Signup)
