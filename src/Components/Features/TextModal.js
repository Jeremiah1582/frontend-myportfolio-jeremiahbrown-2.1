import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import {
  Spinner,
  Modal,
  Button,
  Alert,
  Form,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { MyContext } from "../../Context/ContextApi";

function TextModal({ read, show, handleClose, item, setMsg }) {
  const { backendHostLink, user, myHeader, refreshList } =
    useContext(MyContext);
  const { author, email, company, subject, message, dateReceived } = item;
  const [isLoading, setIsLoading] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const [checked, setChecked] = useState(item.read);
  const userId = user._id;
  const itemId = item._id;
  console.log(read);

  useEffect(() => {
    axios
      .post(
        `${backendHostLink}admin/markMsgRead`,
        { read: checked, userId: userId, itemId: itemId },
        myHeader
      )
      .then((result) => {
        console.log("erfer", result);
        setIsLoading(false);
        refreshList();
        handleClose();
      });
  }, [checked]);

  const handleDeleteAlert = (e) => {
    console.log(e.target.value);
    setDeleteAlert(true);
  };
  const handleDeleteAlertClose = () => {
    setDeleteAlert(false);
  };
  const deleteMsg = () => {
    axios
      .post(
        `${backendHostLink}admin/removeMsg`,
        { userId: userId, itemId: itemId },
        myHeader
      )
      .then((result) => {
        setMsg(result.msg);
        refreshList();
        handleDeleteAlertClose();
        handleClose();
      });

    console.log(item);
  };

  return (
    <>
      {deleteAlert ? (
        <Modal show={deleteAlert} onHide={handleClose}>
          <Alert variant="warning" className="deleteAlert">
            <h5>
              ARE YOU SURE you want to delete this Message from {email} ?
              <br />
              <br /> If deleted this Msg will be lost for all time
            </h5>

            <Button variant="danger" onClick={deleteMsg}>
              Delete
            </Button>

            <Button
              closeButton
              variant="light"
              onClick={handleDeleteAlertClose}
            >
              Cancel
            </Button>
          </Alert>
        </Modal>
      ) : (
        <Modal show={show} onHide={handleClose} className="msgModal">
          <Modal.Header closeButton>
            <Modal.Title>
              {company} <br />:{subject}{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="msgModalBody">{message}</Modal.Body>

          <Modal.Footer>
            {author} <br />
            {email} <br />
            {dateReceived}
            {isLoading ? (
              <>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
            ) : (
              //   <ButtonGroup className="mb-2">
              //   <ToggleButton
              //     id="toggle-check"
              //     type="checkbox"
              //     variant={read?"primary":"light"}
              //     checked={checked}
              //     value={true}
              //     onChange={(e) => setChecked(e.target.checked)}
              //   >
              //     Message read
              //   </ToggleButton>
              // </ButtonGroup>

              <Form.Check
                type="checkbox"
                label="Mark as read"
                // defaultValue={read}
                value={true}
                onChange={(e) => setChecked(e.currentTarget.checked)}
                checked={checked}
              />
            )}
            <Button
              variant="danger"
              className="deleteButton"
              onClick={handleDeleteAlert}
            >
              delete Message
            </Button>{" "}
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default TextModal;
