import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../Context/ContextApi.js";

import { imageCollection } from "../../Context/dataSets/imgCollection.js";
import ThreeDCarousel from "../Features/3Dcarousel.js";
// import Carousel from "../Features/3Dcarousel"
import headerImg from "../../images/mePNG/2019_me_taken_ByEby-Degu-removebg-preview.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="imgOfMe"></div>
      <div className="subtextbox">
        <p className="bottomText"> built by Jeremiah Brown </p>
        {/* <img src={headerImg} alt="" /> */}
      </div>
      <div className="headerImgContainer"></div>
    </div>
  );
}

export default Header;
