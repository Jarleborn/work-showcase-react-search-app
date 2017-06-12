import React from 'react'
import { Col, Card, Row } from 'react-materialize'
const ResultBox = (props) => {
  return(
    <Col s={6}>
      <ol>
        {  props.searchResults.map(function (item) {
          return(
            <Card>
              <li>
                <Row>
                  <Col s={4}>
                    <img src={'' + item.snippet.thumbnails.default.url} />
                  </Col>
                  <Col s={8}>
                    <a target='_blank' href={'https://www.youtube.com/watch?v=' + item.id.videoId}>{item.snippet.title} </a>
                  </Col>
                </Row>
              </li>
            </Card>
          )
        })
      }
      </ol>
    </Col>
  )
}

export default ResultBox
