import React from 'react'
import Card from "react-bootstrap/Card";

function CodeStackCard(props) {
    const {item, indx} = props
  return (
    <div className="myCard" key={item + indx}>
    <Card.Img
      className="icon"
      variant="top"
      src={item.icon}
    ></Card.Img>
    {/* slide effect */}
    <Card.Body className="slide slide2">
      <div className="content">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.info.slice(0, 40).concat("...")}</Card.Text>
        {/* <ListGroup className="list-group-flush">
        <ListGroupItem>{item.type}</ListGroupItem>

        {item.paradigm ? (
          <ListGroupItem>Paradigms: {item.paradigm}</ListGroupItem>
        ) : null}
        {item.writtenIn ? (
          <ListGroupItem>WrittenIn: {item.writtenIn}</ListGroupItem>
        ) : null}
      </ListGroup> */}

        <Card.Link href={item.documentation}>Documentation</Card.Link>
        <br />
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div>
    </Card.Body>
  </div>
  )
}

export default CodeStackCard