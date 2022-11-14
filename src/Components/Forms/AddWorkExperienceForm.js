import React, { useState, useContext } from "react";
import { Modal, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";

import Carousel from "../Features/3Dcarousel";

function AddWorkExperience() {
  const { user } = useContext(MyContext);
  const userId = user._id;
  const [workExp, setWorkExp] = useState({
    imageLink: "",
    companyLink: "",
    startDate: {},
    endDate: {},
    companyName: "",
    position: "",
    responsibilities: "",
  });
  const [msg, setMsg] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExpInput = (e) => {
    e.preventDefault();
    setWorkExp({ ...workExp, [e.target.name]: e.target.value });
  };

  const handleAddExpSubmit = (e) => {
    e.preventDefault();
    console.log("handleAddExpSubmit was fired ");
    // axios
    //   .post(
    //     `${backendHostLink}/${user.accountType}/addWorkExp`,
    //     { workExp, userId },
    //     {
    //       headers: {
    //         authorization: "Bearer " + localStorage.getItem("currentToken"),
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("addWorkExp result from Bck=", result);
    //     setMsg(result.msg);
    //   });

    //   handleClose()
  };
  const expList = user.workExperience;
  console.log(user);
  const workExperienceCards = expList.map((item, indx) => {
    return {
      callToAction: "view",
      content: (
        <Card
          key={item._id}
          imagen={item.imageLink}
          name={item.companyName}
          startDate={item.startDate}
          endDate={item.endDate}
          position={item.position}
          link={item.companyLink}
          description={item.responsibilities}
          callToAction="view"
        />
      ),
    };
  });

  return (
    <div>
      <Button onClick={handleShow}>+</Button>

      {/* WorkExperience Carousel  */}
      <div className="carouselSec">
        {expList.map((item, indx) => {
          return (
            <Card key={item.companyName + indx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.imageLink} />
              <Card.Body>
                <Card.Title>{item.companyName}</Card.Title>
                <Card.Text>
                  {item.startDate}
                  {item.endDate}
                  {item.responsibilities}
                </Card.Text>
                <Button href={item.companyLink} variant="primary">
                  View
                </Button>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <Modal show={show}>
        <div className="addWorkExpForm">
          <Form userid={userId} onSubmit={handleAddExpSubmit}>
            <Form.Group className="mb-3 col-5" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                name="startDate"
                type="date"
                placeholder="start date"
                onChange={handleExpInput}
                value={workExp.startDate}
                autoFocus
              />
            </Form.Group>
            {/* <img
              className="addWrkExpImg"
              src="https://www.pngall.com/wp-content/uploads/8/Job-Work-PNG-File.png"
              alt=""
            /> */}
            <Form.Group className="mb-3 col-5" controlId="endDate">
              <Form.Label> End Date </Form.Label>
              <Form.Control
                name="endDate"
                type="date"
                placeholder="end date"
                onChange={handleExpInput}
                value={workExp.endDate}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="companyName">
              <Form.Control
                name="companyName"
                type="name"
                placeholder="Company Name"
                onChange={handleExpInput}
                value={workExp.companyName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="position">
              <Form.Control
                name="position"
                type="name"
                placeholder="position"
                onChange={handleExpInput}
                value={workExp.position}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="responsibilities">
              <Form.Label>responsibilities</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="responsibilities"
                type="name"
                placeholder="what were your responsibilities at this company"
                onChange={handleExpInput}
                value={workExp.responsibilities}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add Exp
              </Button>
            </Modal.Footer>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default AddWorkExperience;
