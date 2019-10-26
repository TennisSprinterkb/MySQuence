import React from 'react';
import Nav from "../Nav/index";
import { Card, CardTitle, Row, Col } from 'react-materialize';
import './style.css';

class CreatorPage extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <h2 className="title">Website Creators</h2>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translate(-50%, -50%)'
        }}>
        </div>
        <Row>
          <Col l={2} m={4} s={6}>
            <Card key="1" header={<CardTitle image={require("../../assets/images/ebeaudet.png")} />}
              title="Ed Beaudet">
              <a target="_blank" href="https://www.linkedin.com/in/edward-beaudet-78027433/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="2" header={<CardTitle image={require("../../assets/images/iimai.jpg")} />}
              title="Ize Imai">
              <a target="_blank" href="https://www.linkedin.com/in/ize-imai-45757b29/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="3" header={<CardTitle image={require("../../assets/images/jhorowitz.png")} />}
              title="Jason Horowitz">
              <a target="_blank" href="https://www.linkedin.com/in/jason-horowitz-0a362b5a/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="4" header={<CardTitle image={require("../../assets/images/jpirrone.png")} />}
              title="Jennifer Pirrone">
              <a target="_blank" href="https://www.linkedin.com/in/jennifer-pirrone-59211519/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="5" header={<CardTitle image={require("../../assets/images/kbray.jpeg")} />}
              title="Kevin Bray">
              <a target="_blank" href="https://www.linkedin.com/in/kevin-bray-53a194171/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="6" header={<CardTitle image={require("../../assets/images/lsimmons.png")} />}
              title="Lily Simmons">
              <a target="_blank" href="https://www.linkedin.com/in/lily-simmons-311778121/">LinkedIn</a>
            </Card>
          </Col>
        </Row>

      </div >
    );
  }
}

export default CreatorPage
