import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from "../LoginForm";
import Signup from "../Signup"
import './style.css'

// $(document).on("click", "#btn", function (e) {
//     alert("clicked");
// }); if id 1 load studio page, if id 2 load video, id id 2 load sequence, id id 4 load breathe





class Instructor extends React.Component {

    
    render() {
        return (


                <wrapper id="instructorWrapper">
                <h2>Welcome, Instructor!</h2>
                <img src="https://www.yogaclassplan.com/wp-content/uploads/2017/04/tiya.png" alt="logo" id="instructor"></img>
            
                <div id="recipe-flow">
                    <div class="row mt-3">
                        <div class="col-sm-12">
                            <h4 class="text-purple">What are you looking to do?</h4>
                            <select class="custom-select bg-transparent border-light custom-select-lg mb-3 w-50" id="serving-select">
                                <option value="1" id="1" selected>Find a studio</option>
                                <option value="2" id="2">Create a video</option>
                                <option value="3" id="3">Build a sequence</option>
                                <option value="4" id="4">Breathe</option>
                            </select>
                        </div>
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
                </wrapper>
          

        )
    }
}

export default Instructor;