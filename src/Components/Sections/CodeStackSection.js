import React, { useContext, useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { codingLanguages } from "../../Context/dataSets/codeStackDataset";

function CodeStackSection() {
  return (
    <div id="codeStackSection" className="codeStackSection">
      <div className="codeStackBox">
        {codingLanguages.map((item, indx) => {
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
          );
        })}
      </div>
      <div className="textbox">
        <div className="innerTextBox">
          <h4>My Code Stack</h4>
          <p>
            Interested in knowing more about my code stack? hover over the shield of interest and access the documentation. 
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default CodeStackSection;
