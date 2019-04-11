import React, { Component } from 'react';
import './poses.css';

class Poses extends Component {
  constructor() {
    super();
    this.state = {
      poses: []
    }
  }

  componentDidMount() {
    fetch('/api/poses')
      .then(res => res.json())
      .then(poses => this.setState({poses}, () => console.log('Poses fetched..', poses)));
  }
  render() {
    return (
      <div>
       <h3> Poses </h3>
       <ul>
         {this.state.poses.map(pose =>
         <li key={pose.id}>{ pose.name }</li>
          )}
       </ul>
      </div>
    );
  }
}

export default Poses;
