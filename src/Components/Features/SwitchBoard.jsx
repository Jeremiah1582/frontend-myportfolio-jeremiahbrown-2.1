import React from "react";
import AddWorkExperience from "../Forms/AddWorkExperienceForm.js";
import EditUserForm from "../Forms/editUserForm";
import EditUserBio from "../Forms/EditUserBio.js";
import UploadFile from "../Forms/UploadFile.js";
import { workExpList } from "../../Context/dataSets/switchWorkExpList.js";
import WorkExpCard from "./WorkExpCard.js";
// import EditAboutSec from "../sections/forms/EditAboutSec";

function SwitchBoard({ display }) {
  return display.component ? (
    display.component
  ) : (
    <WorkExpCard id={display._id} display={display} />
  );
  // return (
  //   <WorkExpCard/>
  // )
}
export default SwitchBoard;
