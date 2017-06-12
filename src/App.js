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

        <Navbar brand='Serch Stuff' right></Navbar>
        <h6> Skriv i rutan och tryck på enter så söker du lätt och ledigt på youtube</h6>
        <Field />


      </div>
    )
  }
}

export default App
