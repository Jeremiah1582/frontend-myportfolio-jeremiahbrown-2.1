import { useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./styling/App.scss";
import { Alert, Modal } from "react-bootstrap";
import LandingPage from "./Components/Pages/LandingPage";
import AboutSection from "./Components/Sections/AboutSection";
import CodeStackSection from "./Components/Sections/CodeStackSection";
import MessagePage from "./Components/Pages/MessagePage";
import EditPage from "./Components/Pages/EditPage";
import ProjectsSection from "./Components/Sections/ProjectsSection";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/ContextApi";
import SideNavBar from "./Components/Features/SideNavBar";
import SendMsgModal from "./Components/Forms/SendMsgModal";
import MsgButton from "./Components/Features/MsgButton";
import WorkExpPage from "./Components/Pages/workExpPage";

function App() {
  const { getUser, hostLink } = useContext(MyContext);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  const [msgModalShow, setMsgModalShow] = useState(false);

  const handleAlertShow = () => setAlertShow(true);
  const handleMsgModalShow = () => setMsgModalShow(true);

  const handleMsgModalClose = (msg) => {
    setAlertMsg(msg);
    setMsgModalShow(false);
    handleAlertShow();
    setTimeout(() => {
      // AlertClose()
      setAlertMsg("");
      setAlertShow(false);
    }, 1000 * 3);
  };

  return (
    <div className="App">
      <SideNavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/aboutSection" element={<AboutSection />} />
        <Route path="/projectsSection" element={<ProjectsSection />} />
        <Route path="/codeStackSection" element={<CodeStackSection />} />
        <Route path="/workExpPage" element={<WorkExpPage />} />
        <Route path="/messagePage" element={<MessagePage />} />
        <Route path="/editPage" element={<EditPage />} />
        {/* <Route exact="/cv" element={<CVSection />} /> */}
        {/* if isAdmin true */}
      </Routes>
      <SendMsgModal
        msgModalShow={msgModalShow}
        handleMsgModalShow={handleMsgModalShow}
        handleMsgModalClose={handleMsgModalClose}
      />
      <Modal variant="success" show={alertShow}>
        <Modal.Header closeButton>
          <Modal.Title>{alertMsg}</Modal.Title>
        </Modal.Header>
      </Modal>
      )
      <MsgButton handleMsgModalShow={handleMsgModalShow} />
    </div>
  );
}

export default App;
