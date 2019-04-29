import React, { Component } from 'react';
import './style.css';
import BreatheCard from '../BreatheCard'
import Nav from "../Nav"

class BreathePage extends Component {
  render() {
    return (
    <div>
      <Nav />
      <div className="container">
        <BreatheCard />
      </div>
    </div>
    );
  }
}

export default BreathePage;

