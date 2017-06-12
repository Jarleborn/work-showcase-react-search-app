import React from 'react'
import { searchAPI, searchSucces, searchFail} from '../../lib/actions/search-action'
import { connect } from 'react-redux'

const RecentItem = (props) => {
  const {value, searchValue, method} = props
  // console.log(value);
  // console.log(searchValue);

  // that.setState({searchValue,value})
  console.log(method)
  return(
    <li>
    <form id='resultListSearch' autoComplete="off">
    <li onClick={searchAPI('searchValue')}>
      {value}
    </li>
    </form>
    </li>
  )

}

export default RecentItem
