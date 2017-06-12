import React from 'react'

const RecentItem = (props) => {

  const {method} = props

  if (localStorage.recent) {
    return(

        <ul>
        {localStorage.recent.split(',').reverse().map(function (item) {
          return(
            <div>
              <li href='#' onClick={() => {
                method(item)
              }}>
              {item}
              </li>
            </div>
          )
        })}
        </ul>

    )
  }else{
    return(
      <b> No searches have been done before </b>
    )
  }


}

export default RecentItem
