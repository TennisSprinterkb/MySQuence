import React, { Component } from 'react';
import './style.css';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import asanaJson from '../../asana2.json';
import Nav from '../Nav';

class SavedPage extends Component {
  state = {
    filteredAsana: asanaJson,
    selectArray: localStorage.getItem("selectString").split(",").map(Number),
    savedArray: [{ sequenceName: "sequence1", sequenceId: "1, 2, 3" }, { sequenceName: "sequence2", sequenceId: "4, 5, 6" }],
    sequenceName: ""
  };

  componentDidMount() {
    this.filterAsana();
  }

  checkString = () => console.log(this.state.selectArray)

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      sequenceName: event.target.value
    })
  }

  pushSequence = (event) => {
    event.preventDefault();

    const ids = this.state.selectArray
    const stringIds = JSON.stringify(ids);
    console.log(stringIds);


    fetch("/api/sequence", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sequenceName: this.state.sequenceName,
        poseIds: stringIds,
      })
    })
  }

  // set clicked sequence to display
  showSavedSequence = (event) => {
    event.preventDefault();

    // grab the sequenceId from the array based on the id
    let sequenceId = 0;

    // save the new array to state
    this.setState({
      selectArray: sequenceId.split(",").map(Number)
    })
    // re-render cards
    this.filterAsana();
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

  // Generates cards for each pose 'asana' in the filteredAsana object
  _renderPose(asana) {
    const { id, sanskrit_name, english_name, img_url, targetArea, translation, category, cues } = asana;
    return (
      <Col l={3} m={6} s={12} >
        <Card key={id} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Category: {category}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  _renderSequence(sequence) {
    const { id, sequenceName } = sequence;
    return (
    <a className="btn" href={sequenceName} id={id} onClick={this.showSavedSequence}>
    Show this sequence from your saved list = {sequenceName}</a>
    )};

  // Renders on the DOM here
  render() {
    return (
      <div>
        <Nav />
        <div className="cardDiv">
          <p id="instruct">View your previously saved sequences</p>
          <Row>
            {this.state.savedArray.map((this._renderSequence).bind(this))}
          </Row>
          <Row>
            {this.state.filteredAsana.map((this._renderPose).bind(this))}
          </Row>
        </div>
      </div>
    );
  }
}

export default SavedPage;