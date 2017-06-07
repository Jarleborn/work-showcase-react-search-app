import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchValue: this.props.searchValue,
    }
  }
  render() {
    const { searchValue } = this.state

    return(
      <div class="sField">
        <p>HÄR ÄR ETT FORMULÄR</p>

      </div>
    )
  }
}
export default Field
