import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import store, { history } from './lib/store'
import { Navbar, row } from 'react-materialize';
import logo from './logo.svg'
import './App.css'
import Field from './components/search/field'

class App extends Component {
  render() {
    return (
      <div className="App row">

        <Navbar brand='Search stackoverflow' right></Navbar>
        <h6> To search just type in the box and press enter, but keep in mind that the application only look for matches in titels</h6>
        <Field />


      </div>
    )
  }
}

export default App
