import React, { Component } from 'react';
import './style.css';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import asanaJson from '../../asana2.json';

class SelectedPage extends Component {
  state = {
    filteredAsana: asanaJson,
    selected: []
  };

  // This function is where you feed in the array from the database (at return line)
  filterAsana = (e) => {
    let filteredAsana = asanaJson;
    filteredAsana = filteredAsana.filter((asana) => {
      return asana.category === 1
    })
    this.setState({
      filteredAsana
    })
  }


  _renderPose(asana) {
    const { id, sanskrit_name, english_name, img_url, targetArea, translation, category, cues } = asana;
    return (
      <Col l={3} m={3} s={6}>
        <Card key={id} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Category: {category}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div className="cardDiv">
      <p>This is the selected page</p>
        <Row>
          {this.state.filteredAsana.map((this._renderPose).bind(this))}
        </Row>
      </div>
    );
  }
}

export default SelectedPage;