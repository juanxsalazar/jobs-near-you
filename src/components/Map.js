import React, { Component } from "react";
import MapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
// import ppl from '../images/ppl.png'
import cash from "../images/cash.png";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 27.7700989,
        longitude: -82.6364093,
        zoom: 12.5,
        bearing: 0,
        pitch: 0
      }
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px"
  };

  render() {
    const { viewport } = this.state;

    return (
      <div id="map">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken="pk.eyJ1IjoianVhbjIzc2FsYXphciIsImEiOiJjanUyaW0xMWIwY3QxNDRvN3ZnMW91N3BxIn0._YtrtrN7f2ba2F4S3HVL2Q"
          onViewportChange={this._updateViewport}
        >
          <Marker
            latitude={27.7712188}
            longitude={-82.6697279536116}
            offsetTop={-64}
            offsetLeft={-32}
          >
            <img width={64} height={64} src={cash} />
          </Marker>

          <div className="nav" style={this.navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </MapGL>
      </div>
    );
  }
}

export default Map;
