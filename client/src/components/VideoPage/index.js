import React, { Component } from 'react';
import './style.css';
import Nav from '../Nav'
import VideoCard from '../VideoCard'
import InstVideoCard from '../InstVideoCard';


class VideoPage extends Component {

 
 
  handleOnLoad () {
    
    localStorage.getItem("isTeach")
    
  }

  render() {
    return (
      
      <div>
        <Nav />
          <div className="container">
            <VideoCard />
            {localStorage.getItem("isTeach") === 'true' ? <InstVideoCard /> : null}
        </div>
      </div>
    );
  }
}
export default VideoPage;

