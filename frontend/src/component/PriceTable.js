import React, { useEffect } from "react";
import "./pricetable.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PriceTable = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <>
      <div className="price" data-aos="fade-in">
        <div className="price-container">
          <div className="price-details">
            <h4>{props.h4} </h4>
            <span className="bar"></span>
            <h1>{props.h1}</h1>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
            <Link to="/contect" className="btn1">
              PURCHASE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
