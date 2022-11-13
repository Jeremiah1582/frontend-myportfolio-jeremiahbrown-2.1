import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Col, Form, InputGroup, Row, Alert } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MyContext } from "../../Context/ContextApi";

export function OffCanvasRight({ name, ...props }) {
  const { setIsLoggedin } = useContext(MyContext);
  const [show, setShow] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState("");

  const handleClose = () => {
    setShow(false);
    props.setLoginClicked(show);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLoginDetails({ ...loginDetails, [e.target.type]: e.target.value });
    console.log(loginDetails);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5001/user/adminLogin`, { loginDetails })
      .then((doc) => {
        console.log("doc is ....", doc);

        if (doc.data.auth === true) {
          const token = doc.data.token;
          window.localStorage.setItem("currentToken", token);
          setIsLoggedin(true);
          setMsg(doc.data.msg);
          handleClose();
        } else if (doc ==null){
          setMsg(doc.data.msg);
        }else {
          console.log(doc);
          setMsg(doc.data.msg);
        }
      });
  };

  return (
    <>
      <Offcanvas
        className="offcanvas"
        show={show}
        onHide={handleClose}
        {...props}
      >
      
        <Offcanvas.Header closeButton>
          
          <Offcanvas.Title>Welcome Back</Offcanvas.Title>
        </Offcanvas.Header>
        {msg !==""? (
          <Alert variant="warning">{msg}</Alert>
        ):null}
        
        <Offcanvas.Body className="offCanvasBody">
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Button type="submit"> Login</Button>
          </Form>
         
        </Offcanvas.Body>
       
      </Offcanvas>
    </>
  );
}
