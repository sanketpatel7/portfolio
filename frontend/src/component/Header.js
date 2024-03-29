import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/sankettt.png";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="nav-left">
          <Link to="/" className="logoLink">
            <img src={Logo} alt="\logo img" className="header-logo" />
          </Link>
        </div>

        <div className="nav-right">
          <ul className={click ? "nav-flex active" : "nav-flex"}>
            <li>
              <Link to="/" className="menu">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="menu">
                Project
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu">
                About
              </Link>
            </li>
            <li>
              <Link to="/contect" className="menu">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </>
  );
};

export default Header;
