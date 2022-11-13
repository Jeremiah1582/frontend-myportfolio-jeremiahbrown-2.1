import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/ContextApi";
import { Table, Alert, Button } from "react-bootstrap";
import TextModal from "../Features/TextModal";
import axios from "axios";

function MessagePage() {
  const { user, getUser, refreshList } = useContext(MyContext);
  const [msgItem, setMsgItem] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [msg, setMsg] = useState("");

  const handleClick = (item) => {
    console.log(msgItem);
    setMsgItem(item);
    handleShow();
  };
  console.log(user.messagesReceived);
  return (
    <div id="messagePage" className="msgPageContainer">
      <Button variant="warning" onClick={refreshList}>
        refresh
      </Button>
      {""}
      <div className="msgPageLayout">
        <div className="msgListContainer">
          {user.messagesReceived !== [] ? (
            <Table striped bordered hover className="msgList">
              <tbody>
                {user.messagesReceived.map((item, indx) => {
                  const {
                    author,
                    email,
                    company,
                    subject,
                    message,
                    dateReceived,
                    read,
                  } = item;

                  return (
                    <tr
                      style={item.read ? null : { backgroundColor: "#DDF8E8" }}
                      key={item.company + indx}
                      className="msgBox"
                      onClick={() => handleClick(item)}
                    >
                      <td style={{ minWidth: "48px" }}>{indx + 1} </td>
                      <td>{dateReceived.slice(0, 21)}</td>
                      <td>{author.slice(0, 18)}</td>
                      <td>{company.slice(0, 18)}</td>
                      <td>{subject.slice(0, 18)}</td>
                      <td>{email.slice(0, 18)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : null}
        </div>
        <TextModal
          show={show}
          handleClose={handleClose}
          item={msgItem}
          setMsg={setMsg}
          read={msgItem.read}
        />
      </div>
    </div>
  );
}

export default MessagePage;
