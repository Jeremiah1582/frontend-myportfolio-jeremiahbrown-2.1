import React from "react";
import { servicesListCards } from "../../Context/dataSets/servicesList";
import Carousel from "../Features/3Dcarousel";

function ServicesSection(props) {
  return (
    <div id="servicesSection" className="contentSection ">
      <div className="carouselSec">
        <Carousel
          {...props}
          cards={servicesListCards}
          height="100%"
          width="40rem"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <div className="textbox">
        <div className="innerTextBox">
          <h4>Services</h4>
          <p>
          Looking for someone to build your vision but don't know where to start? <br /> Don't worry you're in the right place. 
          <br /> Whether you need a UX/UI Designer, Someone to migrate your data or maybe you just need someone to point you in the right direction. Whatever it is, I am here to help. My professional skills and library of life experience influence every part of my work, allowing me to look at your challenges from fresh perspectives, offering you new forward thinking solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
