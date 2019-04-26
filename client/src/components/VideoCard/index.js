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
            <img src="https://yt3.ggpht.com/a-/AAuE7mB7pGFORxqPuYHgMlgeqzzFMYQFlhPvd30Xjw=s900-mo-c-c0xffffffff-rj-k-no" alt="test" className="circle responsive-img"></img>
          </div>
          <div className="row">
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/VvYCKlkLhNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/xEyyu7kk0ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/OQ6NfFIr2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
          </div>

          <div className="row">
            {/* <h2><u>Faith</u></h2> */}
          </div>
          <div className="row">
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/VvYCKlkLhNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/xEyyu7kk0ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/OQ6NfFIr2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
          </div>

          <div className="row">
            {/* <h2><u>John</u></h2> */}
          </div>
          <div className="row">
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/VvYCKlkLhNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/xEyyu7kk0ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col s4">
              <iframe width="280" height="160" src="https://www.youtube.com/embed/OQ6NfFIr2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
          </div>

        </div>
      </div>

    );
  }
}

export default VideoCard;