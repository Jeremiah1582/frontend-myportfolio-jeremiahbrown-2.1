import AddWorkExperience from "../../Components/Forms/AddWorkExperienceForm";
import EditUserBio from "../../Components/Forms/EditUserBio";
import EditUserForm from "../../Components/Forms/editUserForm";
import UploadFile from "../../Components/Forms/UploadFile";

export const editUserInfoList = [
  {
    name: "Edit User Info",
    id: "FormEditUser",
    adminOnly: true,
    component: <EditUserForm />,
  },
  {
    name: "Edit User Bio",
    id: "EditUserBio",
    adminOnly: true,
    component: <EditUserBio />,
  },
  {
    name: "Add Work Exp ",
    id: "AddWorkExperience",
    adminOnly: true,
    component: <AddWorkExperience />,
  },
  {
    name: "Upload File",
    id: "UploadFile",
    adminOnly: true,
    component: <UploadFile />,
  },
];
