import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchAPI, searchSucces, searchFail} from '../../lib/actions/search-action'
import ResultBox from './resultbox'
import RecentItem from './recentItem'


class Field extends Component{

  constructor(props){
    super(props)
    this.state = {
      searchValue: this.props.searchValue,
      searchResults: this.props.searchResults,
      showResult: this.props.showResult,
    }
  }

  saveToRecent = sValue => {
    let recentData = []
    recentData.push(localStorage.recent)
    recentData.push(sValue)
    localStorage.recent = recentData
    return true
  }

  handleSubmit = e => {
    e.preventDefault()
    // this.props.doSearch(this.state.searchValue)
  }
  handleChange = key => {
    // let that = this
    // console.log(key);
    // return function(e) {
    //   const state = {}
    //   console.log(e)
    //   // const props = this.props
    //   state['searchValue'] = key
    //   that.setState({'searchValue': state })
    // }
    return function(e) {
      const state = {}
      const props = this.props
      state[key] = e.target.value
      this.setState({'searchValue': state })

      if (this.promise)
        clearInterval(this.promise)

      if (e.target.value !== ''){
        // this.promise = setTimeout(function(){
        let recentData = []
        recentData = localStorage.recent.split(',')
        recentData.push(state.searchValue)
        localStorage.recent = recentData
        console.log(localStorage.recent.split(','))
        props.doSearch(state.searchValue)
        // }, 500)
      }
    }.bind(this)
  }

  render() {
    const { searchValue } = this.state
    console.log(this)
    let that = this
    return(
      <div class="sField">
      <ul>
        { localStorage.recent.split(',').reverse().map(function (item) {
          return(
            <a> <RecentItem value={item} searchValue={item} method={that.handleSubmit} /> </a>
          )
        })
        }
      </ul>
      <form id='searchForm' onSubmit={this.handleSubmit} autoComplete="off">
        <input
          label="Name"
          required
          value={searchValue}
          onClick={this.handleChange(searchValue)}
        />
      </form>
      // <button type="submit" > search </button>
      { this.props.showResult &&
        <ResultBox searchResults={this.props.searchResults.json.items} />
      }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isSearching: state.search.isSearching,
  searchResults: state.search.searchResults,
  failure: state.search.failure,
  showResult: state.search.showResult,
})

const mapDispatchToProps = dispatch => ({
  doSearch: (searchValue) => dispatch(searchAPI(searchValue)),
  searchFailure: () => dispatch(searchFail()),
  searchSucces: () => dispatch(searchSucces()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)
