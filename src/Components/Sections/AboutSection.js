import React from "react";

function AboutSection({ children }) {
  return (
    <div id="aboutSection" className="aboutSection">
      <div className="innerTextBox ">
        <h4>About</h4>

        <p>
          {" "}
          Hi! I'm Jeremiah (he/him), a Full Stack Developer and Cloud Practitioner working
          remotely here in Berlin. Some say I'm a charismatic guy, I like to
          think I just have a few screws loose. Anyway, take a look around, and
          if you require my services, you can reach out via the
          WhatsApp message icon in the bottom right of the page.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
