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
          As a Freelance Developer, my clients are the boss, but I get to decide how I do what I do. My library of experience offers the opportunity to bring my knowledge from multiple disciplines into my work. Therefore,  as your Developer, I can see your problem from a diverse perspective enabling me to offer a new approach to your problems and your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
