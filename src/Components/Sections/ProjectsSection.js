import React from "react";
import { projectListCards } from "../../Context/dataSets/projectsList";
import Carousel from "../Features/3Dcarousel";

function ProjectsSection(props) {

  return (
    <div id="projectsSection" className="contentSection ">
      <div className="textbox">
        <div className="disappearingInnerTextBox">
          <h4>Projects</h4>

          <p>
            Take a look at some of the projects i enjoyed working on, and if you see anything that inspires you, reach out and let me know.
          </p>
        </div>
      </div>
      <div className="carouselSec">
        <Carousel
          {...props}
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
