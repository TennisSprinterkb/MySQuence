import React, { Component } from 'react';
import './style.css';
import { Button, Card, CardTitle, Divider, Dropdown, Row, Col } from 'react-materialize';
import asanaJson from '../../asana.json';


class AsanaCard extends Component {

  state = {
    categories: ["Backbends", "Balancing", "Hip", "Inversion", "Peak", "Seated", "Shoulder", "Standing", "Supine", "Twists"],
    asana: asanaJson,
    selected: []
  };


  _renderPose(asana, i) {
    const { sanskrit_name, english_name, img_url, targetArea, translation, category, cues } = asana;
    return (
      <Col l={3} m={6} s={12}>

        <Card key={i} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <Button
            floating
            large
            className="purple"
            waves="light"
            icon="add"
            value={category}
          />
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  _sortByCategory = (category) => {
    for (var i = 0; i < this.state.asana; i++) {
      if (this.state.asana[i].category === category.category) {
        this.state.selected.push(this.state.asana[i]);
      }
      console.log(this.state.asana)
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Dropdown trigger={<Button className="purple">Sort by Category</Button>}>
            {this.state.categories.map(category => (<a key={category} onClick={this._sortByCategory.bind(this, {category})} className="purple-text">
              {category}
            </a>))}
            <Divider />
          </Dropdown>
        </Row>
        <br></br>
        <br></br>
        <Row>
          {this.state.asana.map(this._renderPose)}
        </Row>
      </div>
    );
  }
}

export default AsanaCard;