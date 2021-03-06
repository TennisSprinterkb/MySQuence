import React from 'react';
import { withRouter } from 'react-router-dom'
import './style.css'


class LandingPage extends React.Component {

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

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="center-align">
            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
            <div className="row">
              <button onClick={this.Login}
                className="btn waves-effect waves-dark text-darken-2 card-panel"
                type="submit" name="action">Login
                        </button>
              <button onClick={this.Signup}
                className="btn waves-effect waves-dark text-darken-2 card-panel"
                type="submit" name="action">Sign Up
                        </button>
            </div>
          </div>
        </div>
        
         <div className="footerContainer center-align">
          <a className="footerLink" href="/creator">Learn more about the creators</a>
          <p>Copyright © 2019</p>
        </div> 
      </div>
    )
  }
}

export default withRouter(LandingPage)