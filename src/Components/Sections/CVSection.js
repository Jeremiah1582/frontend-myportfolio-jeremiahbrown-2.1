import React, { useState, useContext } from "react";
import CVImagen from "../../images/new-cv-nov-2022.png";
import { Button } from "react-bootstrap";
import Card from "../Features/Card.jsx";
import Carousel from "../Features/3Dcarousel";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";

function CVSection() {
  const [fileIdInBucket, setFileIdInBucket] = useState("63bc474a958bbec77d6f160a")
  const { backendHostLink, user } = useContext(MyContext);
  // const fileIdInBucket = "63b4545f355f90fd8147d3ae";


  const [CVInfo, setCVInfo] = useState([
    {
      img: CVImagen,
      name: "Download CV",
      description: "my cv is here. feel free to download or just view it",
      link: `${backendHostLink}api/getCV/${fileIdInBucket}`,
      callToAction: "Download",
    },
    {},
  ]);

  const cardList = CVInfo.map((doc, indx) => {
    return {
      content: (
        <Card
          imagen={doc.img}
          name={doc.name}
          key={indx}
          description={doc.description}
          callToAction={doc.callToAction}
          link={doc.link}
        />
      ),
    };
  });
  return (
    <div id="CVSection" className="CVSection contentSection">
      <div className="textbox ">
        <div className="innerTextBox disappearingInnerTextBox">
          <h4>Web-Developemnt CV</h4>
          <p>This is my web Dev CV and Credentials</p>
        </div>
      </div>
      <div className="carouselSec">
        <Carousel
          cards={cardList}
          height="100%"
          width="47rem"
          margin="0 auto"
          offset={3}
          showArrows={false}
        />
      </div>
    </div>
  );
}

export default CVSection;
