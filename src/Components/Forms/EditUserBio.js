import React, { useContext, useState, useEffect } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";

function EditUserBio() {
  const [msg, setMsg] = useState({});
  const { user, getUser, backendHostLink, myHeader } = useContext(MyContext);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      _id: user._id,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    if (user.accountType === "admin") {
      axios
        .post(
          `${backendHostLink}admin/editUserInfo`,
          { update: updatedUser },
          myHeader
          // {
          //   headers: {
          //     authorization: "Bearer " + localStorage.getItem("currentToken"),
          //   },
          // }
        )
        .then((result) => {
          //update document in database
          //use SetUser to update User in the context api
          getUser();
        });
    } else {
      setMsg({
        status: false,
        msg: "You are not authorized to make these changes",
      });
    }
  };
  return (
    <div className="editUserBioForm ">
      <Form onSubmit={handleSubmitChange} className="editAboutSection ">
        <InputGroup style={{ height: "400px" }}>
          <InputGroup.Text>About</InputGroup.Text>
          <Form.Control
            name="aboutUser"
            as="textarea"
            aria-label="With textarea"
            placeholder={
              user.aboutUser
                ? user.aboutUser
                : "write a short bio about yourself"
            }
            onChange={handleChange}
            defaultValue={user.aboutUser}
            size="xxl"
          />
        </InputGroup>
        <img
          src="https://www.appnovation.com/sites/default/files/2019-06/atlassian_0.png"
          alt=""
        />
        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>
    </div>
  );
}

export default EditUserBio;
