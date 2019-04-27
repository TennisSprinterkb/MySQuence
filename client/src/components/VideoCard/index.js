import React, { Component } from 'react';
import './style.css';
import videoJson from '../../video.json';


class VideoCard extends Component {

  state = {
    filteredVideo: videoJson,
    selected: []
  };

  render() {
    return (
      <div >
        <div className="container">
          <div className="row">
            <h2><u>Adrienne</u></h2>
            <div className="col s12 push-s5">
              <img src="https://yt3.ggpht.com/a-/AAuE7mB7pGFORxqPuYHgMlgeqzzFMYQFlhPvd30Xjw=s900-mo-c-c0xffffffff-rj-k-no" alt="test" className="circle responsive-img"></img>
            </div>
          </div>
          <div className="row">
            <div className="col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/VvYCKlkLhNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className="col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/xEyyu7kk0ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className=" col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/OQ6NfFIr2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
          </div>
          <div className="row">
            <div className="col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/M-8FvC3GD8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className="col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/iEVn59U2_LY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col s4 video-responsive">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/dcqW72d5JjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
          </div>
          
        </div>
      </div>
    );
  }
}

export default VideoCard;