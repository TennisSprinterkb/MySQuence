import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'react-materialize';
import breatheJson from '../../breathe.json';
import Nav from "../Nav"


class BreatheCard extends Component {

    state = {
        filteredBreathe: breatheJson,
        selected: [],
        breathe: {},
        modalOpen: false
    };

    showModal = (breathe) => {
        this.setState({breathe},
           () => {
               this.setState({modalOpen: true})
           }
            )
        console.log(breathe)
    }

    _renderBreathe(breathe) {
        const { id, image } = breathe;
        return (
            <Col l={3} m={6} s={12}>
                <img key={id} src={image} alt={id} onClick={ ()=> this.showModal(breathe)}/>
            </Col>
        );
    }

    render() {
        return (
            <div className="breatheDiv" onClick={ ()=> this.setState({modalOpen: false})}>
                <Nav />
                <br></br>
                <h3 className="choose">Choose a Favorite Breathing Exercise!</h3>
                <br></br>
                {
                    this.state.modalOpen && 
                    <div className="modal1">
                    <div>
                    <img src={this.state.breathe.image} alt="" class="renderedImage"/>
                        </div>
                        </div>
                        
                }
                {this.state.modalOpen === false &&  
                
                <Row>
                    {this.state.filteredBreathe.map((this._renderBreathe).bind(this))}
                </Row>
                }
                <br></br>
                <br></br>
            </div>
            
        );
    }
}

export default BreatheCard;
