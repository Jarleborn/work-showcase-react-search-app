import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchValue: this.props.searchValue
    }
  }
  render() {
    const { searchValue } = this.state

    return(
      <div class="sField">
        <form id='searchForm' onSubmit={this.handleSubmit} autoComplete="off"
          // <Textfield
          //   label="Name"
          //   required
          //   value={searchValue}
          //   onChange={this.handleChange('searchValue')}
          //   expandable
          //   expandableIcon="search"
          //   onBlur={this.handleBlur}
          // />

        />

      </div>
    )
  }
}

export default Field
