import React from "react";
import { servicesListCards } from "../../Context/dataSets/servicesList";
import Carousel from "../Features/3Dcarousel";

function ServicesSection() {
  return (
    <div id="servicesSection" className="contentSection ">
      <div className="carouselSec">
        <Carousel
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
          Looking for someone to build your idea but don't know where to start? Don't worry you're in the right place. Whether you need a UX/UI Designer, Someone to migrate your data or maybe you just need someone to point you in the right direction. Whatever it is, I am here to help. Together with my professional skills, my library of life experience influences how I work and allows me to look at your challenges from a new perspective. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
