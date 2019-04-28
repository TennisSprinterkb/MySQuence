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
            <InstVideoCard handleOnLoad={localStorage.getItem("isTeach") === 'true' ? 'Show' : 'Hide'} /> 
        </div>
      </div>
    );
  }
}
export default VideoPage;

