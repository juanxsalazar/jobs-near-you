import React, { Component } from 'react';
import MapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
// import pin.. 150 x 150... 

class Map extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          viewport: {
            latitude: 27.7700989,
            longitude: -82.6364093,
            zoom: 12.5,
            bearing: 0,
            pitch: 0
          }
        }
      }

      _updateViewport = viewport => {
        this.setState({ viewport })
      }
      
    render() {
        const { viewport } = this.state

        return (
            <>
    <div id="map">
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken="pk.eyJ1IjoianVhbjIzc2FsYXphciIsImEiOiJjanUyaW0xMWIwY3QxNDRvN3ZnMW91N3BxIn0._YtrtrN7f2ba2F4S3HVL2Q"
      onViewportChange={this._updateViewport}
   />
                    </div>
            </>
        );
    }
}

export default Map;