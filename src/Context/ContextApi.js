import React, { useState, createContext, useEffect } from "react";
import { defaultUserState } from "./dataSets/emptyUserDataSet";
import axios from "axios";

export const MyContext = createContext();

function MyProvider({ children }) {
  const [user, setUser] = useState({});
  const [returnResult, setReturnResult] = useState();
  const [msg, setMsg] = useState({});
  const [cvIdDev, setCvIdDev] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const hostLink = `http://localhost:3000/`;
  const backendHostLink = "http://localhost:5001/";
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [carouselTextBox1, setcarouselTextBox1] = useState("");

  const [carouselTextBox2, setcarouselTextBox2] = useState("");

  const refreshList = () => {
    getUser();
  };
  //HEADERS
  const myHeader = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("currentToken"),
    },
  };
  const myMultipartHeader = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("currentToken"),
      "Content-Type": "multipart/form-data",
    },
  };
  // get user
  const getUser = (e) => {
    axios.get(`${backendHostLink}user/defaultGetUser`).then((data) => {
      if (data.data !== null) {
        setUser(data.data);
      } else {
        setUser(defaultUserState);
      }
    });
  };

  if (isLoggedin === true) {
    setTimeout(() => {
      if (localStorage.getItem === "currentToken") {
        localStorage.clear("currentToken");
        setIsLoggedin(false);
      }
    }, 300000 * 5);
  }
  const logout = () => {
    console.log("logout function used");
    if (localStorage.currentToken !== null) {
      window.location.href = hostLink; //redirect to homepage
      localStorage.clear("currentToken");
      setIsLoggedin(false);
    }
  };
  

  useEffect((e) => {
    getUser();
  }, []);

  return (
    <MyContext.Provider
      value={{
        hostLink,
        backendHostLink,
        getUser,
        user,
        msg,
        setMsg,
        isAdmin,
        isLoggedin,
        setIsLoggedin,
        setIsAdmin,
        logout,
        setUser,
        myHeader,
        myMultipartHeader,
        cvIdDev,
        setCvIdDev,
        refreshList,
        carouselTextBox1,
        setcarouselTextBox1,
        carouselTextBox2,
        setcarouselTextBox2,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
export default MyProvider;
