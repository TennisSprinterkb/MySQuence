import React, { Component } from 'react';
import './style.css';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import asanaJson from '../../asana2.json';

class SelectedPage extends Component {
  state = {
    filteredAsana: asanaJson,
    selectArray: localStorage.getItem("selectString").split(",").map(Number)
  };

  componentDidMount() {
    this.filterAsana();
  }

  checkString = () => console.log(this.state.selectArray)

  // Change the order of the array
  changeOrder = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(this.state.selectArray.indexOf());
    console.log("Clicked on button");
  }

  // Takes the selectArray and generates a new JSON with only the selected poses
  filterAsana = () => {
    let newList = [];
    for (let i = 0; i < this.state.selectArray.length; i++) {
      for (let j = 0; j < this.state.filteredAsana.length; j++) {
        if (this.state.selectArray[i] === this.state.filteredAsana[j].id) {
          newList.push(this.state.filteredAsana[j]);
          break;
        }
      }
    }
    this.setState({
      filteredAsana: newList
    })
  }

  _renderPose(asana) {
    const { id, sanskrit_name, english_name, img_url, targetArea, translation, category, cues } = asana;
    return (
      <Col l={3} m={6} s={12} >
        <Card key={id} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Category: {category}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <span>{sanskrit_name}</span>
          <a className="btn" href={id} value={this.state.selectArray.indexOf(parseInt({id}))} onClick={this.changeOrder}><i className="material-icons left">arrow_upward</i>Move Up</a>
          <a className="btn" href={id}><i className="material-icons left">arrow_downward</i>Move Down</a>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div className="cardDiv">
        <p>Move your selected poses into your desired order with arrow buttons</p>
        <button onClick={this.checkString}>Check the string again</button>
        <Row>
          {this.state.filteredAsana.map((this._renderPose).bind(this))}
        </Row>
      </div>
    );
  }
}

export default SelectedPage;