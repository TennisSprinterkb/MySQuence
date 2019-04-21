import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'react-materialize';
import breatheJson from '../../breathe.json';
import Nav from "../Nav"


class BreatheCard extends Component {

  state = {
    filteredBreathe: breatheJson,
    selected: []
  };


  _renderBreathe(breathe) {
    const { id, image } = breathe;
    return (
      <Col l={3} m={6} s={12}>
        <img key={id} src={image} />
      </Col>
    );
  }

  render() {
    return (
      <div className="breatheDiv">
      <Nav />
        <br></br>
        <br></br>
        <Row>
          {this.state.filteredBreathe.map((this._renderBreathe).bind(this))}
        </Row>
      </div>
    );
  }
}

export default BreatheCard;