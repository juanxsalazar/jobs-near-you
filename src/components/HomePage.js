import React, { Component } from 'react'



class HomePage extends Component {
  render() {
    return <div className="center">
    <h1>Jobs Near you</h1>
    <h4>A simple app to show you a map of the places hiring near your!</h4>
    <input type="search" placeholder="Search by Address or Zipcode"></input>
    <button>Search</button>  
    </div>
  }
}

export default HomePage

// googlemaps api key: AIzaSyDjPXB1ZTe7m6ns_8Ma4KmsaSwCR2_KzjU
// jobs api key: 
// https://github.com/toddmotto/public-apis#jobs


// Ruby map lesson notes down here....





// geocoded_by :address
// rails console
// add :longitude and "latitude on json"
// add gemcode geocode
// yarn add react-map-gl has been added. 9:53am... 
// 9:57am 