import React, { Component } from 'react'
import HomePage from './components/HomePage'
import BusinessList from './components/BusinessList'
import Map from './components/Map'

class App extends Component {
  render() {
    return <>
    <HomePage />
    <BusinessList />
    <Map />
    </>
  }
}

export default App
