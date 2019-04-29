import React, { Component } from 'react';
import './style.css';
import videoJson from '../../video.json';


class InstVideoCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photo:"",
            video:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
       

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.photo)
        localStorage.setItem("photo", this.state.photo);
        localStorage.setItem("video", this.state.video);
        document.getElementById("vidForm").reset();
        document.getElementById('photo').value = '';
        document.getElementById('video').value = ''
        
    }

    render() {
        return (
                    <form id="vidForm" action="#">
                    <h3 className="instHead">Update Your Page</h3>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={this.state.photo} onChange={this.handleChange} name="photo" id="photo" type="text" class="validate"></input>
                                <label className="active" for="photo">Update Profile Photo Link</label>
                            </div>
                            <div className="input-field col s12">
                                <input value={this.state.video} onChange={this.handleChange} name="video" id="video" type="text" class="validate"></input>
                                <label className="active" for="video">Link a New Video</label>
                            </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Submit
                        </button>
                        </div>
                    </form>
        );
    }
}

export default InstVideoCard;