import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'react-materialize';
import breatheJson from '../../breathe.json';



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
                <img className="breatheImages" key={id} src={image} alt={id} onClick={ ()=> this.showModal(breathe)}/>
            </Col>
        );
    }

    render() {
        return (
            <div className="center-align">
            <div className="breatheDiv" onClick={ ()=> this.setState({modalOpen: false})}>
                {/* <Nav /> */}
                <br></br>
                <h3 className="choose">Choose your Favorite shape!</h3>
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
                
            </div>
            </div>
            
        );
    }
}

export default BreatheCard;
