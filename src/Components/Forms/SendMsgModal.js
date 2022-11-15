import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal, Alert, Form, Button } from "react-bootstrap";
// import ProfileImgSec from "../../images/Ezter in Slovenia 2018  (1).JPG"
import { MyContext } from "../../Context/ContextApi";

function SendMsgModal({
  handleMsgModalShow,
  handleMsgModalClose,
  msgModalShow,
}) {
  const { backendHostLink, refreshList } = useContext(MyContext);
  const [msg, setmMsg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [checked, setChecked] = useState(false);
  const [msgDetails, setMsgDetails] = useState({
    title: "",
    subject: "",
    author: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInput = (e) => {
    setMsgDetails({ ...msgDetails, [e.target.name]: e.target.value });
    console.log(msgDetails);
  };

  const handleFormSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    axios
      .post(`${backendHostLink}user/sendWhatsappMsg`, { msgDetails })
      .then((result) => {
        console.log(result);
        setIsPending(false);
        refreshList();
        handleMsgModalClose();
        setMsgDetails({
          title: "",
          subject: "",
          author: "",
          email: "",
          company: "",
          message: "",
        })
      });
  };
  return (
    <div>
      <Modal show={msgModalShow} onHide={handleMsgModalClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#76cc7a", color: "white" }}
        >
          {/* <ProfileImgSec /> */}

          <Modal.Title>Send Jeremiah a Message </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
          {msg !== "" ? <Alert variant="warning">{msg}</Alert> : ""}
          <Modal.Body id="msgModalBody">
            {/* Author */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicAuthor"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                placeholder="your name"
                name="author"
                value={msgDetails.author}
                onChange={handleInput}
              />
            </Form.Group>

            {/* company */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicCompany"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                placeholder="company name"
                name="company"
                value={msgDetails.company}
                onChange={handleInput}
              />
            </Form.Group>

            {/* Email  */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={msgDetails.email}
                onChange={handleInput}
              />
            </Form.Group>
            {/* subject */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicSubject"
            >
              <Form.Control
                type="text"
                placeholder="subject of your message"
                name="subject"
                value={msgDetails.subject}
                onChange={handleInput}
              />
            </Form.Group>
            {/* message */}
            <Form.Text className="text-muted"></Form.Text>
            <Form.Group
              className="mb-3 msgModalInput "
              controlId="formBasicMessage"
            >
              <Form.Control
                className="msgTextArea"
                // style={{  }}
                type="textArea"
                placeholder="Message"
                name="message"
                onChange={handleInput}
                value={msgDetails.message}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#ececec" }}>
            <Form.Group
              className="mb-3 msgModalInput "
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="I give consent to allow the creator of this page to contact me in response to my request."
                onChange={() => {
                  if (checked === false) {
                    setChecked(true);
                  } else {
                    setChecked(false);
                  }
                }}
              ></Form.Check>
            </Form.Group>

            {!isPending ? (
              <Button
                type="submit"
                variant={checked ? "primary" : ""}
                disabled={checked ? false : true}
              >
                Send
              </Button>
            ) : (
              <Button disabled>sending ...</Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default SendMsgModal;
