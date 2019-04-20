import React, { Component } from 'react';
import './style.css';
import { Button, Card, CardTitle, Divider, Dropdown, Row, Col } from 'react-materialize';
import asanaJson from '../../asana2.json';


class AsanaCard extends Component {

  state = {
    categories: ["Backbend", "Balancing", "Hip", "Inversion", "Peak", "Seated", "Standing", "Strength", "Supine"],
    filteredAsana: asanaJson,
    selected: []
  };

  filterAsana = (e) => {
    let filteredAsana = asanaJson;
    filteredAsana = filteredAsana.filter((asana) => {
      return asana.category === e.target.innerHTML
    })
    this.setState({
      filteredAsana
    })
  }

  addPose = (id) => {
    var selected = this.state.selected;
    selected.push(id)
    this.setState({
      selected: selected
    })
    console.log(this.state.selected);
    this.setState({ clicked: !this.state.clicked })
  }

  _renderPose(asana) {
    const { id, sanskrit_name, english_name, img_url, targetArea, translation, category, cues } = asana;
    return (
      <Col l={3} m={6} s={12}>
        <Card key={id} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Category: {category}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <Button
            floating
            large
            className="purple"
            waves="light"
            icon="add"
            disabled={this.state.selected.indexOf(id) === -1 ? false : true}
            onClick={() => this.addPose(id)}
          />
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div className="cardDiv">
        <Row>
          <Dropdown trigger={<Button className="purple">Sort by Category</Button>}>
            {this.state.categories.map(category => (<p key={category} onClick={(this.filterAsana)} className="purple-text">
              {category}
            </p>))}
            <Divider />
          </Dropdown>
        </Row>
        <br></br>
        <br></br>
        <Row>
          {this.state.filteredAsana.map((this._renderPose).bind(this))}
        </Row>
        <Row className="footer">
          <a href="/selected" className="white-text center"><h5>Generate Sequence</h5></a>
        </Row>
      </div>
    );
  }
}

export default AsanaCard;