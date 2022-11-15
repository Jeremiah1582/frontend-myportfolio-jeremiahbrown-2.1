import React, { useState, useContext } from "react";
import CVImagen from "../../images/crop-of-webdevCV.JPG";
import { Button } from "react-bootstrap";
import Card from "../Features/Card.jsx";
import Carousel from "../Features/3Dcarousel";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";

function CVSection() {
  const { backendHostLink, user } = useContext(MyContext);
  const fileIdInBucket = "6373c427c9999520d9106b41";

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
