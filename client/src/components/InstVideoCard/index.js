import React, { Component } from 'react';
import './style.css';
import videoJson from '../../video.json';


class InstVideoCard extends Component {

    state = {
        filteredVideo: videoJson,
        selected: []
    };

    render() {
        return (
            <div >
                <div className="container">

                    <form action="#">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Instructor Photo</span>
                                <input type="file" multiple></input>
                            </div>
                            <div className="file-path-wrapper">
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="input-field col s6">
                                <input value="" id="first_name2" type="text" class="validate"></input>
                                <label className="active" for="first_name2">Instructor Name: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input value="" id="video" type="text" class="validate"></input>
                                <label className="active" for="video">Video Link: </label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}

export default InstVideoCard;