import React from "react";
// import Header from "./Header";
import Me from "../img/sanketbkp.JPEG";
import Header from "./Header";
import "../component/aboutChild.css";
import { Link } from "react-router-dom";

const ChildAbout = () => {
  return (
    <>
      <Header />
      <div className="main-div">
        <div className="child-div-left">
          <h1>ABOUT ME</h1>
          <p>
            Welcome to{" "}
            <Link to="/">
              <span>Sanket Bhuva's </span>
            </Link>
            digital World! With a bachelor's degree from Junagadh Gurukul, I am
            a passionate 360 Design Front End Developer hailing from Mevasa
            village. Explore my dynamic portfolio showcasing innovative web
            solutions, responsive designs, and a commitment to transforming
            ideas into captivating user experiences. Let's embark on a journey
            of creativity and functionality!
          </p>
          <h1>SKILL'S</h1>
          <p>
            Welcome to my digital realm! I'm Sanket Bhuwa, a skilled{" "}
            <b>Front-End Developer</b> adept in <span>HTML</span>,{" "}
            <span>CSS </span>, and
            <span> JavaScript</span> with a focus on React.js. In the{" "}
            <b>Back-End</b>, I leverage <span>PHP</span> and{" "}
            <span>Laravel </span>, crafting dynamic and efficient applications.
            Proficient in SQL, I blend creativity and functionality to bring
            ideas to life. Explore my diverse portfolio showcasing my passion
            for web development.
          </p>
          <h1>EDUCATION</h1>
          <p>
            Welcome to my portfolio! With a passion for technology ignited
            during my Commerce journey, I embarked on a Bachelor of Computer
            Application in 2020. Proficient in
            <span> Front-end development</span>, I combine creativity and coding
            to craft seamless digital experiences. Explore my projects and let's
            innovate together in the IT realm.
          </p>
          <Link to="/contect">
            <button className="btn1 about-btn" style={{ margin: "auto" }}>
              <b>HIRE ME</b>
            </button>
          </Link>
        </div>
        <div className="child-div-right">
          <img src={Me} alt="sanket img" className="chid-about-img" />
        </div>
      </div>
    </>
  );
};

export default ChildAbout;
