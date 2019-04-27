import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav'
import VideoCard from '../VideoCard'


class VideoPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h2>Watch A Video</h2>
          <div className="videoDiv">
            <VideoCard />
          </div>
        </div>
    );
  }
}
export default VideoPage;

