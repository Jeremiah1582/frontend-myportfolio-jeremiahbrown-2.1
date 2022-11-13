import React from "react";
import { projectListCards } from "../../Context/dataSets/projectsList";
import Carousel from "../Features/3Dcarousel";

function ProjectsSection() {

  return (
    <div id="projectsSection" className="contentSection ">
      <div className="textbox">
        <div className="disappearingInnerTextBox">
          <h4>Projects</h4>

          <p>
            These are some of the projects i have worked on over time Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptas, atque minima perspiciatis magni quibusdam! Recusandae ex,
            a, officiis ullam ipsam possimus modi delectus non ipsa error, cum
            perferendis in?
          </p>
        </div>
      </div>
      <div className="carouselSec">
        <Carousel
          cards={projectListCards}
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

export default ProjectsSection;
