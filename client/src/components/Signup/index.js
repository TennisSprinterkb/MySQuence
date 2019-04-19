import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import StudForm from "../StudForm";
import InstForm from "../InstForm";
import "./style.css";

class Signup extends Component {

constructor(props) {
			super(props)
				
		this.state = {			
			buttonId: null
		}
		this.setButton = this.setButton.bind(this);
	}	
	setButton(id) {
		this.setState({buttonId: id});
		document.getElementById('header').style.display = 'none';
		document.getElementById('stud').style.display = 'none';
		document.getElementById('inst').style.display = 'none';
	}
	
render() {
	return (
	<div class="container">
		<div className="center-align">
		  <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
			<div className="row">
			{this.state.buttonId === 1 && <InstForm />}
			{this.state.buttonId === 2 && <StudForm />}
			{/* {this.state.buttonId !== 1  && this.state.buttonId !== 2 && <Signup />} */}
				<form className="col s12 center-align main">
					<div class="row">
						<div className="col s12"><h4 id="header" className="heading center-align">Sign Up</h4></div>
					</div>	
					<div class="row">
						<div className="col s12 center-align">
						<input id="inst" className={this.state.buttonId === 1? "button1 btn" : 
						"button1 btn"} onClick={() => this.setButton(1)} value="Instructor" 
						type="button" ref="button" />

						<input id="stud" className={this.state.buttonId === 2? "button2 btn" : 
						"button2 btn"} onClick={() => this.setButton(2)}  value="Student" 
						ref="button1" type="button" />
					</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	)
}
}

export default withRouter(Signup)
