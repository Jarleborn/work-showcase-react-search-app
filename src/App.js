import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store, { history } from './lib/store'
import logo from './logo.svg'
import './App.css'
import Field from './components/search/field'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to 123</h2>
        </div>
        <Field />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </Provider>
      </div>
    )
  }
}

export default App