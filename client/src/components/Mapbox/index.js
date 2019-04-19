import React, { Component } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import './style.css';
import yogaStudio from '../../yoga-studio.json';
import Nav from "../Nav/index"

const MAPBOX_PASS = `${process.env.REACT_APP_MAPBOX_PASS}`;

class Mapbox extends Component {

  state = {
    viewport: {
      width: 450,
      height: 450,
      latitude: 39.9526,
      longitude: -75.1652,
      zoom: 12,
      maxZoom: 12
    }
  };

  _onViewportChange = viewport => this.setState({ viewport });

  _onInteractionStateChange = interactionState => this.setState({ interactionState });

  _onSettingChange = (name, value) => this.setState({
    settings: { ...this.state.settings, [name]: value }
  });

  _renderMarker(studio, i) {
    const { name, coordinates, url } = studio;
    return (
      <Marker key={i} longitude={coordinates.longitude} latitude={coordinates.latitude}
        captureDrag={false} captureDoubleClick={false}>
        <a href={url}>
          <div className="studio">
            <span>{name}</span>
          </div>
        </a>
      </Marker>
    );
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="mapbody">
          <ReactMapGL className="map"
            {...this.state.viewport}
            mapboxApiAccessToken={MAPBOX_PASS}
            onViewportChange={(viewport) => this.setState({ viewport })}
          >
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              fitBoundsOptions={{ maxZoom: 12 }}
              onViewportChange={this._onViewportChange}
            />
            {yogaStudio.map(this._renderMarker)}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default Mapbox;