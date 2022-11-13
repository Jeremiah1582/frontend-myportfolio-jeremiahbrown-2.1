import React, { useContext, useState, useEffect, useReducer } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";
import SwitchBoard from "../Features/SwitchBoard.jsx";
import ProfileInfoCard from "../Features/ProfileInfoCard.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { editUserInfoList } from "../../Context/dataSets/switchBoardEditList.js";
import EditUserForm from "../Forms/editUserForm";

function EditPage() {
  const [msg, setMsg] = useState({});
  const { user, setUser, isAdmin, getUser, isLoggedin } = useContext(MyContext);
  // const default = ,
  const [display, setDisplay] = useState({
    name: "Edit User Info",
    id: "FormEditUser",
    adminOnly: true,
    component: <EditUserForm />,
  });
  if (isLoggedin) {
    return (
      <div className="editPageContainer">
        <div className="sideContainer">
          <ProfileInfoCard page="EditPage" />

          <div className="switchBoardControl ">
            <ul className="selectionList">
              {editUserInfoList.map((item, indx) => {
                const handleClick = (item) => {
                  setDisplay(item);
                  console.log(item);
                };
                return (
                  <p
                    key={item + indx}
                    className="listItem"
                    onClick={() => handleClick(item)}
                  >
                    {item.name}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mainContainer">
          <div className="displayBox">
            <SwitchBoard display={display} list={editUserInfoList} />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>You Must Be Logged In to view this page</h1>;
  }
}
export default EditPage;
