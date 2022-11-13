import React from "react";
import { Button } from "react-bootstrap";

function WorkExpCard({ display, indx }) {
  return (
    <div className="workExpCardContainer">
      <div id={display.company + "." + display.industry}>
        {/* this card will be displayed in the switch board side window */}

        <div className="workExpCard">
          <img src={display.linkImg} alt="" />
          <h4>{display.company}</h4>
          <h5>{display.title}</h5>
          <div className="smallData">
            <p>
              {" "}
              <h8>Duration:</h8> {display.duration}
            </p>
          </div>
          <br />
          <p>{display.responsibilities}</p>
          <Button>{display.callToAction}</Button>
        </div>
      </div>
    </div>
  );
}

export default WorkExpCard;
