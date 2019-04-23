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
    const { id, image } = video;
    return (
      <Col l={3} m={6} s={12}>
        <img key={id} src={image} />
      </Col>
    );
  }

  render() {
    return (
      <div className="videoDiv">
      <Nav />
        <br></br>
        <br></br>
        <Row>
          {this.state.filteredVideo.map((this._renderVideo).bind(this))}
        </Row>
      </div>
    );
  }
}

export default VideoCard;