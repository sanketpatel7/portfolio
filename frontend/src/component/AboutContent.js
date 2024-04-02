import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Img from "../img/Coding workshop-pana.png";
// import Imgg from "../img/Img-2.jpg";
import SanketCv from "../img/sanket resume.pdf";
import "./AboutContent.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="About-content">
        <div className="about-card-content" data-aos="fade-in">
          <div className="about-left">
            <h1>Who I AM ?</h1>
            <p>
              Im a react js font-end developer. I create responsive secure
              websites for my clients
            </p>
            <div className="about-flex">
              <button className="btn1 about-btn">
                <a href={SanketCv} download="">
                  <b>DOWNLOAD CV</b>
                </a>
              </button>
              <Link to="/about/aboutMe" className="btn-link">
                <button className="btn1 about-btn">
                  <b>ABOUT ME</b>
                </button>
              </Link>
            </div>
          </div>
          <div className="about-right" data-aos="fade-up">
            <div className="about-img">
              <img className="about-img-1" src={Img} />
              {/* <img className='about-img-2' src={Imgg}/>  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
