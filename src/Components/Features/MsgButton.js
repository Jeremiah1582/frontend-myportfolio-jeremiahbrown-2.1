import React from "react";
import WAbutton from "../../images/whatsappIcon.png";
import { Card } from "react-bootstrap";

function MsgButton({ handleMsgModalShow }) {
  return (
    <div style={{ border: "none" }} onClick={handleMsgModalShow}>
      <img id="sendMsgButton" src={WAbutton} alt="whatsApp icon" />
    </div>
  );
}

export default MsgButton;
