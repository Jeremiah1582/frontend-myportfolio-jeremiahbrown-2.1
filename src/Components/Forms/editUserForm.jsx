import React, { useContext, useState, useEffect, useReducer } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { defaultUserState } from "../../Context/dataSets/emptyUserDataSet.js";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi.js";

function EditUserForm() {
  const { user, getUser, isLoggedin, myHeader, backendHostLink  } = useContext(MyContext);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [msg, setMsg] = useState({});
  const [socialsList, setSocialsList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    if (e.target.type !== "link") {
      setUpdatedUser({
        ...updatedUser,
        _id: user._id,
        [e.target.name]: e.target.value,
      });
    }
    console.log("updated user is ...", updatedUser);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    if (isLoggedin) {
      axios
        .post(
          `${backendHostLink}${user.accountType}/editUserInfo`,
          { update: updatedUser },
          myHeader
        )
        .then((result) => {
          if (result.result !== null) {
            getUser();
            setMsg(result.data.msg);
            console.log("result is...", result);
          }
        });
    } else {
      setMsg("You are not authorized to make these changes, please login");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmitChange}>
        {/* first name */}
        <div className="EditFormContainer">
          <div className="formSection">
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Control
                name="firstName"
                type="firstName"
                placeholder={user.firstName ? user.firstName : "firstName"}
                defaultValue={user.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            {/* lastName  */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Control
                name="lastName"
                type="lastName"
                placeholder={user.lastName ? user.lastName : "lastName"}
                onChange={handleChange}
                defaultValue={user.lastName}
              />
            </Form.Group>
            {/* title  */}
            <Form.Group className="mb-3" controlId="formBasicJobTitle">
              <Form.Control
                name="title"
                type="title"
                placeholder={user.title ? user.title : "title"}
                onChange={handleChange}
                defaultValue={user.title}
              />
            </Form.Group>
            {/* email  */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder={user.email ? user.email : "email"}
                onChange={handleChange}
                defaultValue={user.email}
              />
            </Form.Group>
            {/* mobile  */}
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Control
                name="mobile"
                type="mobile"
                placeholder={user.mobile ? user.mobile : "mobile"}
                onChange={handleChange}
                defaultValue={user.mobile}
              />
            </Form.Group>
          </div>
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:e202f48f-5f2f-4ab9-8d74-9179566f03ea/confluence-expand-hero.png?cdnVersion=518"
            alt="populate profile"
          />

          <div className="formSection">
            {/* location  */}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                name="location"
                type="location"
                placeholder="location"
                onChange={handleChange}
                defaultValue={user.location}
              />
            </Form.Group>
          </div>
          <div className="formSection ">
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </div>
        </div>
        {msg.msg ? (
          <Alert variant={msg.status === true ? "success" : "danger"}>
            {msg.msg}
          </Alert>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
}

export default EditUserForm;
