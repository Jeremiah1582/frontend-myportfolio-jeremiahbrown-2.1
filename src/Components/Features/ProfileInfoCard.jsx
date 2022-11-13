import react, { useState, useContext } from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";
import { MyContext } from "../../Context/ContextApi.js";
import SwitchBoard from "./SwitchBoard";
import UploadProfilePic from "../../Components/Forms/UploadProfilePic.js";

function ProfileInfoCard() {
  const { user, isLoggedin, backendHostLink } = useContext(MyContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(backendHostLink + user.profilePic);
  return (
    <div className="profileInfoCard">
      <div className={isLoggedin ? "online" : "offline"}>
        {isLoggedin ? "online" : "offline"}
      </div>
      <div className="profImgCon">
        <img
          onClick={handleShow}
          className="profileImg"
          src={
            user.profilePic
              ? backendHostLink + user.profilePic
              : "http://www.clarkerowesolicitors.co.uk/wp-content/uploads/2019/04/Situations-Vacant-icon.png"
          }
          alt="profile"
        />
      </div>

      <div className="infoSec">
        <div>
          {user.firstName} {user.lastName}
        </div>
        <div>{user.email}</div>
        <div>{user.title}</div>
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>choose a new Profile Pic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UploadProfilePic />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
export default ProfileInfoCard;
