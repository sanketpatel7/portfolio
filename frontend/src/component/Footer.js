import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                style={{ color: "white" }}
                className="left-icons"
                size={40}
              />
              <div>
                <p style={{ textAlign: "left" }}>Near Shalby Hospital</p>
                <p style={{ textAlign: "left" }}>
                  opp. Ananta Complex, New Naroda
                </p>
                <p style={{ textAlign: "left" }}>Ahmedabad, Gujarat 382330</p>
              </div>
            </div>

            <div className="phone">
              <FaPhone
                style={{ color: "white" }}
                className="left-icons"
                size={30}
              />
              <p>+91 98988 94881</p>
            </div>

            <div className="mail">
              <FaMailBulk
                style={{ color: "white" }}
                className="left-icons mails"
                size={30}
              />
              <p>sanketbhuva7@gmail.com</p>
            </div>
          </div>

          <div className="right">
            <h4 style={{ color: "white" }}>About Me</h4>
            <p>
              A web design company specializes in creating visually stunning,
              user-friendly websites. They combine creativity and{" "}
            </p>
            <div className="icons">
              <Link
                target="_blank"
                to={"https://www.facebook.com/profile.php?id=100049080003648"}
              >
                <FaFacebook size={40} className="footerbtn" />
              </Link>
              <Link
                to={"https://www.instagram.com/sanketpatel._7/"}
                target="_blank"
              >
                <FaInstagram size={40} className="footerbtn" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/sanket-patel-857828261/"}
                target="_blank"
              >
                <FaLinkedin
                  size={40}
                  // style={{ color: "white" }}

                  className="footerbtn"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
