import React from "react";
import "./HeroImg.css";
// import Background from "../img/Background.jpg";
import Background from "../img/home2.jpg";
// import Background from "../img/62.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img src={Background} className="bg-img" alt="simple img" />
        </div>
        <div className="content">
          <p className="content-p">Hii . I'M A FREELANCER.</p>
          <br />
          <h1 className="heading">REACT JS DEVELOPER </h1>
          <br />
          <div className="buttons">
            <Link to="/project" className="btn1">
              Project
            </Link>
            <Link to="/contect" className="btn2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
