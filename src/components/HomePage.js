import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <>
    <h1>Jobs Near you</h1>
    <input type="search" placeholder="Search address or zipcode"></input>
    <button>Search</button>
    
    </>
  }
}

export default HelloWorld