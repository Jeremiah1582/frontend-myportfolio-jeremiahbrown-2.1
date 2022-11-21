import LandingPage from "../../Components/Pages/LandingPage";
import AboutSection from "../../Components/Sections/AboutSection";
import CodeStackSection from "../../Components/Sections/CodeStackSection";
import MessagePage from "../../Components/Pages/MessagePage";
import EditPage from "../../Components/Pages/EditPage";
import ProjectsSection from "../../Components/Sections/ProjectsSection";
import ServicesSection from "../../Components/Sections/ServicesSection";
import { projectsList } from "../dataSets/projectsList";
import WorkExpPage from "../../Components/Pages/workExpPage";
import { MyContext } from "../ContextApi";
// import LoginModal from "../../Components/Pages/LoginModal";

export const navArray = [
  {
    _id: "home",
    name: "Home",
    icon: "fa fa-fw fa-home",
    className: "navItem navItemHome",
    adminOnly: false,
    component: <LandingPage />,
    to: "/#",
  },
  {
    _id: "aboutSection",
    name: "About",
    icon: "fa fa-fw fa-address-book",
    className: "navItem navItemAbout",
    adminOnly: false,
    to: "/#aboutSection",
    component: <AboutSection />,
  },
  {
    _id: "servicesSection",
    name: "Services",
    icon: "fa fa-fw fa-magic",
    className: "navItem navItemServices",
    adminOnly: false,
    to: "/#servicesSection",
    component: <ServicesSection />,
  },
  {
    _id: "codeStackSection",
    name: "My Code Stack",
    icon: "fa fa-fw fa-code",
    className: "navItem navItemCodeStack",
    adminOnly: false,
    to: "/#codeStackSection",
    component: <CodeStackSection />,
  },
  // {
  //   _id: "WorkExpPage",
  //   name: "Work Experience ",
  //   icon: "fa fa-fw fa-briefcase",
  //   className: "navItem navItemWorkExpPage",
  //   adminOnly: false,
  //   to: "/WorkExpPage",
  //   component: <WorkExpPage />,
  // },
  {
    _id: "projectsSection",
    name: "Projects",
    icon: "fa fa-fw fa-rocket",
    className: "navItem navItemProjects",
    adminOnly: false,
    to: "/#projectsSection",
    subitems: projectsList,
    component: <ProjectsSection />,
  },
  {
    _id: "CV",
    name: "Downoad CV",
    icon: "fa fa-fw fa-file",
    className: "navItem navItemCV",
    adminOnly: false,
    to: "/#CVSection",
    component: "",
  },
  {
    _id: "messagesPage",
    name: "Messages",
    icon: "fa fa-fw fa-inbox",
    className: "navItem navItemMessages",
    adminOnly: true,
    to: "/messagePage",
    component: <MessagePage />,
  },
  {
    _id: "editPage",
    name: "Edit",
    icon: "fa fa-fw fa-cogs",
    className: "navItem navItemEdit",
    adminOnly: true,
    to: "/editPage",
    component: <EditPage />,
  },
  {
    _id: "login",
    name: "Login",
    icon: "fa fa-fw fa-user",
    className: "navItem navItemLogin",
    to: "#",
    adminOnly: false,
    function: () => {},
  },
  {
    _id: "logout",
    name: "logout",
    icon: "fa fa-fw fa-arrow-right",
    className: "navItem navItemLogout",
    to: "#",
    adminOnly: true,
    function: () => {
      console.log("log out function called pressed");
    },
  },
];
