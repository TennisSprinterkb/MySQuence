import React, { Component } from 'react';
import './style.css';
import videoJson from '../../video.json';
import { Row, Col } from 'react-materialize';
import Nav from "../Nav"

class VideoCard extends Component {

  state = {
    filteredVideo: videoJson,
    selected: []
  };

  _renderVideo(video) {
    const { id, url } = video;
    return (
      <Col l={3} m={6} s={12}>
        <img key={id} src={url} />
      </Col>
    );
  }

  render() {
    return (
      <div width="200px" height="200px" className="video-container">
        <Nav />
        <br></br>
        <br></br>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/6mXHknjEl0E?controls=0" 
        frameborder="0" allow="accelerometer; picture-in-picture donotallowfullscreen"></iframe>
      </div >
    );
  }
}

export default VideoCard;