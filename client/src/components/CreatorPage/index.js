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
            <Card key="1" header={<CardTitle image="https://media.licdn.com/dms/image/C5603AQFUoN8uY_H42Q/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=f1OEVQ8MaWP4YSaX0VnIWs9RsOlj7CCrSDoNUD5KEus" />}
              title="Ed Beaudet">
              <a target="_blank" href="https://www.linkedin.com/in/edward-beaudet-78027433/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="2" header={<CardTitle image="https://media.licdn.com/dms/image/C4E03AQGBticY27FFIg/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=4JeWA1EILXvfCBe-0P7S16FeosmogwDiE7il-LDe440" />}
              title="Ize Imai">
              <a target="_blank" href="https://www.linkedin.com/in/ize-imai-45757b29/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="3" header={<CardTitle image="https://media.licdn.com/dms/image/C4E03AQG9flelrFCa3A/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=6mPw6WVRW3bZojU8AmADMZzOR9U1E3ogOQ7IXPHifjI" />}
              title="Jason Horowitz">
              <a target="_blank" href="https://www.linkedin.com/in/jason-horowitz-0a362b5a/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="4" header={<CardTitle image="https://media.licdn.com/dms/image/C4D03AQET8kLh5nGpSQ/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=8HZ0V2MjB58XhVdfK8lnWutVeen728alGwxGwf7Gy3E" />}
              title="Jennifer Pirrone">
              <a target="_blank" href="https://www.linkedin.com/in/jennifer-pirrone-59211519/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="5" header={<CardTitle image="https://media.licdn.com/dms/image/C5603AQH8CsdbujgnTQ/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=PqCVJovJeCQ-H9ACdetZ_UyaK6SzpoP6NygvQX1RDyc" />}
              title="Kevin Bray">
              <a target="_blank" href="https://www.linkedin.com/in/kevin-bray-53a194171/">LinkedIn</a>
            </Card>
          </Col>
          <Col l={2} m={4} s={6}>
            <Card key="6" header={<CardTitle image="https://media.licdn.com/dms/image/C5103AQEaDgHe34MS6A/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=dnPj_86vNPbdx_892S_UHvQMxi0z8kStoTucFkwbZy0" />}
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
