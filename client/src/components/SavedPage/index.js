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
    UserId: localStorage.getItem("UserId"),
    savedArray: [],
    sequenceName: "",
    sequenceId: document.getElementById("id")
  };

 


  componentDidMount() {
    //first use user id to generate fetch
    fetch("/api/sequence/" + this.state.UserId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
      .then(response => {
        console.log(JSON.stringify(response))

        let dbResponse = response
        dbResponse = dbResponse.dbUserSequences
        console.log(dbResponse)


        const newArr = dbResponse.map(data => {

          const temp = data.poseIds;
          const replacement = JSON.parse(temp);
          return {
            ...data,
            poseIds: replacement
          }
        })
        console.log(newArr)
        this.setState({ savedArray: newArr })
      }))
  }


  deleteSequence = () => {
    
   this.setState({sequenceId: document.getElementById("id")})
   console.log(this.state.sequenceId)
  
    fetch("/api/sequence/" + this.state.sequenceId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
        // }).then(response => response.json()
      

        }).then(response => {
          console.log(JSON.stringify(response))
          console.log("delete button clicked")
    })
  }









  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      sequenceName: event.target.value
    })
  }




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
    let { sequenceName, poseIds, id } = sequence;
    return (
      <div>
        <a className="btn" href={sequenceName} id={poseIds} onClick={this.showSavedSequence}>
          Show {sequenceName}</a>
        <button className="deleteBtn" data-id={id} onClick={this.deleteSequence}>Delete</button>
      </div>
    )
  };

  // Renders on the DOM here
  render() {
    return (
      <div>
        <Nav />
        <div className="cardDiv">
          <p id="instruct">Click show sequence buttons to see poses.</p>
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