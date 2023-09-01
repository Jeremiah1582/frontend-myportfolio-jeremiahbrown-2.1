import React from "react";
import Header from "../Features/Header.jsx";
import AboutSection from "../Sections/AboutSection";
import CodeStackSection from "../Sections/CodeStackSection";
import ProjectSection from "../Sections/ProjectsSection";
import ServicesSection from "../Sections/ServicesSection";
import CVSection from "../Sections/CVSection";
import { defaultUserState } from "../../Context/dataSets/emptyUserDataSet";
import CertificatesSection from "../Sections/CertificatesSection.js";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function MyVerticallyCenteredModal(props) {
  const {header, title, text, image} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>
          {text}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function LandingPage() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleModal=(card)=>{
    console.log(card.title);
    setModalShow(true)
  }

  return (
    <div id="home" className="landingPageCon">
      {/* HEADER SEC */}
      <header className="">
        <Header />
      </header>

      <div className="sectionContainer">
        {/* SERVICES SEC */}
        <ServicesSection handleModal={handleModal}/>
        {/* ABOUT SEC */}
        <AboutSection ></AboutSection>
        {/* PROJECT SEC */}
        <ProjectSection handleModal={handleModal}/>
        {/* CODESTACK SEC */}
        <CodeStackSection handleModal={handleModal} />
 {/* CV Section SEC */}
        <CVSection />
        <CertificatesSection></CertificatesSection>
      </div>

      
    <>
  

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>

      {/* Footer */}
      <div className="">
        <footer className="footer">
          <div className="footerCol">
            <h4>Contact details</h4>
            <br />
            <h5>mobile:</h5> <p> +49 178 2822679</p>
            <h5>email: </h5>
            <p>jeremiah.1582@googlemail.com</p>
            <h5>city: </h5> <p>Berlin, Germany (remote)</p>
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
