
import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


// Exporting both SearchResults 

// RecipeList renders a bootstrap list item
export function SavedResults(props) {
  return <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result._id}>
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h4>{result.title}</h4>

              <h4>Written By {result.authors}</h4>
            </Col>
            <Col size="xs-4 sm-2">
              <a className="btn btn-info mr-1" href={result.link} target="_blank">View</a>

              <button className="btn btn-info mr-1"
                onClick={props.button2Action}
                id={result._id}>{props.button2Text}</button>


            </Col>

          </Row>
          <Row>
            <Col size="xs-4 sm-2">

              {result.image ?
                (<Thumbnail src={result.image} />) :
                (<Thumbnail src='images/th.jpg' />)
              }
             
            </Col>
            <Col size="xs-8 sm-9">

              <p>{result.description}

              </p>

            </Col>
          </Row>
        </Container>
      </li>
    ))}
  </ul>

}



export default SavedResults;
