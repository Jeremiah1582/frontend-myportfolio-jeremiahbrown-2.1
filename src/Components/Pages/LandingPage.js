import React, { useContext, useState, useEffect } from "react";
import Header from "../Features/Header.jsx";
import AboutSection from "../Sections/AboutSection";
import CodeStackSection from "../Sections/CodeStackSection";
import ProjectSection from "../Sections/ProjectsSection";
import ServicesSection from "../Sections/ServicesSection";
import CVSection from "../Sections/CVSection";
import { MyContext } from "../../Context/ContextApi.js";
import WorkExpPage from "../Pages/workExpPage";
import { defaultUserState } from "../../Context/dataSets/emptyUserDataSet";
function LandingPage() {
  const { user, getUser } = useContext(MyContext);

  return (
    <div id="home" className="landingPageCon">
      {/* HEADER SEC */}
      <header className="">
        <Header />
      </header>
      <div className="sectionContainer">
        {/* SERVICES SEC */}
        <ServicesSection />
        {/* ABOUT SEC */}
        <AboutSection></AboutSection>
        {/* PROJECT SEC */}
        <ProjectSection />
        {/* CODESTACK SEC */}
        <CodeStackSection />
        {/* CV Section SEC */}
        <CVSection />
      </div>

      {/* Footer */}
      <div className="">
        <footer className="footer">
          <div className="footerCol">
            <h4>Contact details</h4>
            <br />
            <h5>mobile:</h5> <p> {user.mobile}</p>
            <h5>email: </h5>
            <p>{user.email}</p>
            <h5>city: </h5> <p>{user.location}</p>
          </div>
          <div className="footerCol">
            <h4>Socials:</h4>
            <div className="socials">
              <div>
                {defaultUserState.socials.map((item, indx) => {
                  return (
                    <a target="__blank" key={item.name + indx} href={item.link}>
                      <img src={item.img} alt={item.name} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footerCol copyRight">© Copyright Jeremiah Brown</div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
