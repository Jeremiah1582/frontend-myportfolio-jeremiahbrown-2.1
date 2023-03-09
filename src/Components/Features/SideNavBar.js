import { useState, useContext } from "react";
// import {Link} from "react-bootstrap"
import SideNav, {
  Toggle,
  NavItem,
  NavText,
  NavIcon,
} from "@trendmicro/react-sidenav";
import Badge from "react-bootstrap/Badge";
import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";
import { navArray } from "../../Context/dataSets/navArray";
import { projectsList } from "../../Context/dataSets/projectsList";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { OffCanvasRight } from "../Features/LoginOffCanvasRight";
import { MyContext } from "../../Context/ContextApi";
import logo from '../../images/logo-lite192.png'

export default function SideNavBar({ nav, setNav }) {
  const [loginClicked, setLoginClicked] = useState(false);
  const { user, isLoggedin, logout } = useContext(MyContext);

  // const x = useLinkClickHandler();
  if (user.messagesReceived) {
  }

  return (
    <div>
        
      <SideNav
        className="nav"
        onSelect={(selected) => {
          console.log(selected);
          if (selected === "login") {
            setLoginClicked(true);
            console.log(loginClicked);
          }
        }}
      >
      
        <Toggle expanded={true} />
        {loginClicked ? (
          <OffCanvasRight
            show={loginClicked}
            placement="end"
            name="login"
            setLoginClicked={setLoginClicked}
          />
        ) : null}

        <SideNav.Nav defaultSelected="/">
          
          {navArray.map((navLink, indx) => {
            // if (navLink.adminOnly && )
            if (!isLoggedin && !navLink.adminOnly) {
              return (
                <NavItem
                  key={navLink._id + indx}
                  eventKey={navLink._id}
                  className="navItem"
                >
                  <Link to={`${navLink.to}`}>
                    <NavItem>
                      <NavIcon>
                        <i className={`${navLink.icon} navIcon`} />
                      </NavIcon>

                      <NavText >
                        {navLink.name}
                      </NavText>
                      {/* SUBITEM NAV LINKS */}
                      {navLink.subitems ? (
                        <NavItem eventKey={navLink._id}>
                          {navLink.subitems.map((project, index) => {
                            return (
                              <NavItem
                                key={project + index}
                                eventKey={`${navLink._id}/${project.name}`}
                              >
                                <Link to={`${project.link}`}>
                                  <NavItem
                                    eventKey={`${navLink._id}/${project.name}`}
                                  >
                                    <NavIcon>
                                      <i
                                        className="fa fa-fw fa-line-chart"
                                        style={{ fontSize: "1.75em" }}
                                      />
                                    </NavIcon>
                                    <NavText title={project._id}>
                                      {project.name}
                                    </NavText>
                                  </NavItem>
                                </Link>
                              </NavItem>
                            );
                          })}
                        </NavItem>
                      ) : null}
                    </NavItem>
                  </Link>
                  
                </NavItem>
              );
            } else if (isLoggedin) {
              if (navLink._id === "login") {
                return null;
              } else if (navLink._id === "logout") {
                // if LOGOUT
                return (
                  <NavItem
                    key={navLink._id + indx}
                    eventKey={navLink._id}
                    className="navItem"
                  >
                    <Link to={`${navLink.to}`}>
                      <NavItem onClick={logout}>
                        <NavIcon>
                          <i className={`${navLink.icon} navIcon`} style={{}} />
                        </NavIcon>

                        <NavText style={{ color: "white" }}>
                          {navLink.name}
                        </NavText>
                      </NavItem>
                    </Link>
                  </NavItem>
                );
              } else {
                // ADMIN NAVITEMS
                const unreadMsgs = user.messagesReceived.filter((item) => {
                  return item.read === false;
                });
                return (
                  <NavItem
                    key={navLink._id + indx}
                    eventKey={navLink._id}
                    className="navItem"
                  >
                    <Link to={`${navLink.to}`}>
                      <NavItem>
                        <NavIcon>
                          <i className={`${navLink.icon} navIcon`} style={{}} />
                          {navLink._id === "messagesPage" ? (
                            <Badge bg="secondary">{unreadMsgs.length}</Badge>
                          ) : null}
                        </NavIcon>

                        <NavText style={{ color: "white" }}>
                          {navLink.name}
                        </NavText>
                        {/* SUBITEM NAV LINKS */}
                        {navLink.subitems ? (
                          <NavItem eventKey={navLink._id}>
                            {navLink.subitems.map((project, index) => {
                              return (
                                <NavItem
                                  key={project + index}
                                  eventKey={`${navLink._id}/${project.name}`}
                                >
                                  <Link to={`${project.link}`}>
                                    <NavItem
                                      eventKey={`${navLink._id}/${project.name}`}
                                    >
                                      <NavIcon>
                                        <i
                                          className="fa fa-fw fa-line-chart"
                                          style={{ fontSize: "1.75em" }}
                                        />
                                      </NavIcon>
                                      <NavText title={project.name}>
                                        {project.name}
                                      </NavText>
                                    </NavItem>
                                  </Link>
                                </NavItem>
                              );
                            })}
                          </NavItem>
                        ) : null}
                      </NavItem>
                    </Link>
                  </NavItem>
                );
              }
            }
          })}
      

        </SideNav.Nav>
         <img className='logo' to='/' src={logo} alt=""/>
        <Outlet />
        
   
       
        
      </SideNav>
    </div>
  );
}
