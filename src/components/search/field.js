import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchAPI, searchSucces, searchFail} from '../../lib/actions/search-action'
import ResultBox from './resultbox'
class Field extends Component{
  constructor(props){
    console.log('proppp',props)
    super(props)
    this.state = {
      searchValue: this.props.searchValue,
      searchResults: this.props.searchResults,
      showResult: this.props.showResult,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  handleChange = key => {
    return function(e) {
      const state = {}
      const props = this.props
      state[key] = e.target.value
      this.setState(state)

      if (this.promise)
        clearInterval(this.promise)

      if (e.target.value !== ''){
        this.promise = setTimeout(function(){
          props.doSearch(state.searchValue)
        }, 500)
      }else{
        this.props.endSearch()
      }
    }.bind(this)
  }
  render() {
    const { searchValue, searchResults, showResult } = this.state
    console.log(this.props);
    return(
      <div class="sField">
      <form id='searchForm' onSubmit={this.handleSubmit} autoComplete="off">
        <input
          label="Name"
          required
          value={searchValue}
          onChange={this.handleChange('searchValue')}
        />
      </form>
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
