import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return <>
    <h1>Jobs Near you</h1>
    <h4>A simple app to show you a map of the places hiring near your!</h4>
    <input type="search" placeholder="Search by Address or Zipcode"></input>
    <button>Search</button>
    <div id="map">Map Goes Here</div>
  
<footer> Persistency is key</footer>
    </>
  }
}

export default HomePage

// googlemaps api key:
// jobs api key: 