import React, { useContext, useState, useEffect, useReducer } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";
import SwitchBoard from "../Features/SwitchBoard.jsx";
import ProfileInfoCard from "../Features/ProfileInfoCard.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { workExpList } from "../../Context/dataSets/switchWorkExpList";

function WorkExpPage() {
  const [msg, setMsg] = useState({});
  const { user, setUser, isAdmin, getUser } = useContext(MyContext);
  const [display, setDisplay] = useState({
    _id: "FreelancerDev",
    company: "Freelancer Dev",
    link: "#",
    linkImg:
      "https://th.bing.com/th/id/R.6a15a23a99a651ad0159cef0e4b0868a?rik=s6PG5ELcpTfHHw&riu=http%3a%2f%2flptsi.unsoed.ac.id%2fsites%2fdefault%2ffiles%2fcoding.png&ehk=wXjIoVM85%2f5S8YexekzwZUpt1sVFYZOsy%2fQNFTNfh2I%3d&risl=&pid=ImgRaw&r=0",
    industry: ["tech"],
    title: "Web Developer",
    duration: "1 Year",
    responsibilities:
      "help e-commerce companies change their websites to make them more attractive to customers",
    callToAction: "view",
  });

  const handleClick = (display) => {
    setDisplay(display);

    console.log(display);
  };

  return (
    <div className="WorkExpPageContainer">
      <div className="sideContainer">
        <ProfileInfoCard page="WorkExpPage" />

        <div className="switchBoardControl ">
          <ul className="selectionList">
            {workExpList.map((exp, indx) => {
              console.log(exp, indx);
              return (
                <p
                  id={exp._id}
                  key={exp.company + indx}
                  className="listItem"
                  onClick={() => handleClick(exp)}
                >
                  {exp.company}
                </p>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mainContainer">
        <div>
          <div className="displayBox">
            <SwitchBoard display={display} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkExpPage;
