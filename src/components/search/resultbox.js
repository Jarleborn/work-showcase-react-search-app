import React from 'react'

const ResultBox = (props) => {
  const { searchResults } = props
  console.log('props2 ',props)
  return(
    <ol>
      {  props.searchResults.map(function (item) {
        return(
          <li>
            <img src={'' + item.snippet.thumbnails.default.url} />
            <a href={'https://www.youtube.com/watch?v=' + item.id.videoId}>{item.snippet.title} </a>
          </li>
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
