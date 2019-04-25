import React, { Component } from 'react';
import './style.css';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import asanaJson from '../../asana2.json';
import Nav from '../Nav';

// Assuming that there is a userId stored from the login page
class SavedPage extends Component {
  state = {
    filteredAsana: asanaJson,
    selectArray: [],
    userId: localStorage.getItem("UserId"),
    savedArray: [{ sequenceName: "sequence1", poseIds: "1, 2, 3" }, { sequenceName: "sequence2", poseIds: "4, 5, 6" }],
    sequenceName: ""
  };

  // componentDidMount() {
  //   this.filterAsana();
  // }

  checkString = () => console.log(this.state.selectArray);

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      sequenceName: event.target.value
    })
  }

  // pushSequence = (event) => {
  //   event.preventDefault();
  //   const ids = this.state.selectArray
  //   const stringIds = JSON.stringify(ids);
  //   console.log(stringIds);

  //   fetch("/api/sequence", {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       sequenceName: this.state.sequenceName,
  //       poseIds: stringIds,
  //     })
  //   })
  // }

  // set clicked sequence to display
  showSavedSequence = async (event) => {
    event.preventDefault();

    // grab the sequenceId from the array based on the id
    let poseIds = event.target.id;
    poseIds = poseIds.split(",").map(Number);
    console.log(poseIds);

    // save the new array to state (await is necessary so the rendering doesn't start prematurely)
    await this.setState({
      filteredAsana: asanaJson,
      selectArray: poseIds
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

  // DONE: Generates cards for each pose 'asana' in the filteredAsana object
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
    let { sequenceName, poseIds } = sequence;
    return (
      <a className="btn" href={sequenceName} id={poseIds} onClick={this.showSavedSequence}>
        Show this sequence from your saved list named {sequenceName} which contains poseIds = {poseIds}</a>
    )
  };

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