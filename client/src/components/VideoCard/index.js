import React, { Component } from 'react';
import './style.css';



class VideoCard extends Component {

  render() {
    return (
      <div >
          <div className="row">
          <h2 className="instHead">{localStorage.getItem("isTeacher") === "true" ? "Your Videos" : "Watch a Video"}</h2>
            <h3 className="instHead">Adrienne</h3>
            <div className="col s12 center-align">
            {localStorage.getItem("photo") === "" ? 
              <img src= "https://yt3.ggpht.com/a-/AAuE7mB7pGFORxqPuYHgMlgeqzzFMYQFlhPvd30Xjw=s900-mo-c-c0xffffffff-rj-k-no"  alt="test" className="circle responsive-img"></img> : <img src={localStorage.getItem("photo")} alt="test" className="circle responsive-img"></img>}
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneOne" width="280" height="160" src="https://www.youtube.com/embed/VvYCKlkLhNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div >
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneTwo" width="280" height="160" src="https://www.youtube.com/embed/xEyyu7kk0ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div >
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneThree" width="280" height="160" src="https://www.youtube.com/embed/OQ6NfFIr2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div >
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneFour" width="280" height="160" src="https://www.youtube.com/embed/M-8FvC3GD8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div >
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneFive" width="280" height="160" src="https://www.youtube.com/embed/iEVn59U2_LY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div>
            <div className="col s12 m6 l4 center-align video-responsive">
              <iframe title="adrienneSix" width="280" height="160" src="https://www.youtube.com/embed/dcqW72d5JjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div >
          </div>
          
        </div>
    
    );
  }
}

export default VideoCard;