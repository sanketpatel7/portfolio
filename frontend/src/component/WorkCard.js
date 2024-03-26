import React, { useEffect } from "react";
import "./workcard.css";
// import pro1 from '../img/Pro1.png'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="project-container" data-aos="zoom-in">
        <div className="project-card simple">
          <img src={props.imgsrc} alt="" className="pro-1-img" />
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="pro-btn">
            <Link className="btn1" to={props.view} target="_blank">
              VIEW
            </Link>
            <Link className="btn1" to="/contect">
              SOURCE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
