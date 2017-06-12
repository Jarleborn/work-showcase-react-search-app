import React, { Component } from 'react'
import ResultBox from './resultbox'
import RecentItem from './recentItem'
import { key } from '../../lib/conf/key'
import { Col } from 'react-materialize'

class Field extends Component{

  constructor(props){
    super(props)
    this.state = {
      searchValue: this.props.searchValue,
      searchResults: this.props.searchResults,
      showResult: this.props.showResult,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleRecent = newestRecent => {
    let recentData = []

    if (localStorage.recent) {
      recentData = localStorage.recent.split(',')
    }

    if (recentData.length < 10) {
      recentData.push(newestRecent)
    } else{
      for (let i = 0; i < recentData.length; i++) {
        if (i < 9) {
          recentData[i] = recentData[i + 1]
        } else{
          recentData[i] = newestRecent
        }
      }
    }
    localStorage.recent = recentData
  }
  search = value => {
    console.log(value)
    let then = this
    this.handleRecent(value)
    fetch('https://www.googleapis.com/youtube/v3/search?type=&q='+value+'&maxResult=25&part=snippet&key='+key+'',{
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'content-type': 'applicaiton/json',
      },
    })
    .then(function (res) {
      return res.json()
    })
    .then(function (resJson) {
      then.setState({result: resJson})
      then.setState({showResult: true})
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.search(this.state.searchValue)

  }
  handleChange = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const { searchValue } = this.state
    return(
      <div className="sField">
      <Col s={4}>
        <b> Recent searches </b>
        <RecentItem value={localStorage.recent} method={this.search} />
      </Col>
      <Col s={6}>
        <form id='searchForm' onSubmit={this.handleSubmit} autoComplete="off">
          <input
            label="Name"
            required
            onChange={this.handleChange}
            value={searchValue}
          />
        </form>

      { this.state.showResult &&

          <ResultBox searchResults={this.state.result.items} />

      }
      </Col>
      </div>
    )
  }
}

export default Field
