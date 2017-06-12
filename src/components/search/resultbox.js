import React from 'react'
import { Col, Card, Row } from 'react-materialize'
const ResultBox = (props) => {
  return(
    <Col s={6}>
      <ol>
        {
          props.searchResults.length === 0 &&
            <b> We could not find an answer for that, keep in mind that we just search the title of questions </b>
          
        }
        {  props.searchResults.map(function (item) {

          return(
            <Card>
              <li>
                <Row> {item.title} </Row>
                <Row> <a target='_blank' href={item.link}> Read the whole question </a> </Row>
                {item.is_answered && <b>Answered</b>}
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
