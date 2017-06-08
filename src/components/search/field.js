import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchAPI, searchSucces, searchFail} from '../../lib/actions/search-action'

class Field extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchValue: this.props.searchValue,
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
    const { searchValue } = this.state

    return(
      <div class="sField">
      <form id='searchForm' onSubmit={this.handleSubmit} autoComplete="off">
        <input
          label="Name"
          required
          value={searchValue}
          // onChange={this.handleChange('searchValue')}
          expandable
          expandableIcon="search"
          // onBlur={this.handleBlur}
        />
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isSearching: state.search.isSearching,
  searchResults: state.search.searchResults,
  failure: state.search.failure,
})

const mapDispatchToProps = dispatch => ({
  doSearch: (searchValue) => dispatch(searchAPI(searchValue)),
  searchUserFailure: () => dispatch(searchFail()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)
