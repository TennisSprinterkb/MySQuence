import React from 'react';
import './style.css'


const LoginInput = (props) => {
    return (
        <div>
            <div class="center-align">
                <div class="image" >
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/677/1888743677_5dd6243e-d8c4-444a-8bd2-d07dce7dbcda.png" alt="logo"></img>
                    <div class="row">
                        <button 
                        className="btn waves-effect waves-dark text-darken-2 card-panel" 
                        type="submit" 
                       
                        name="action">Login
                        </button>
                        <button 
                        className="btn waves-effect waves-dark text-darken-2 card-panel" 
                        type="submit" 
                 
                        name="action">Sign Up
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginInput