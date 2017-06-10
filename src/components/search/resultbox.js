import React from 'react'

const ResultBox = (props) => {
  const { searchResults } = props

  return(
    <ol>
      {  searchResults.items.map(function (item) {
        console.log(item);
        return(
          <li>{item}</li>
        )
      })
    }
    </ol>
  )
}

// const SearchResults = (props) => {
//   const { searchResults } = props
//   return(
//     <ol>
//       {for (var i = 0; i < props.items.length; i++) {
//         return(
//           <li>props.items[i].snippet.title</li>
//         )
//       }
//     }
//     </ol>
//   )
// }

export default ResultBox
