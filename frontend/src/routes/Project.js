import React from "react";
import Header from "../component/Header";
import HeroImg1 from "../component/HeroImg1";
import Price from "../component/Price";
import "../index.css";
import Work from "../component/Work";
import Footer from "../component/Footer";

const Project = () => {
  return (
    <>
      <Header />
      <HeroImg1 heading="Projects." text="Some of my most work" />
      <div className="price">
        <Work />
      </div>
      <h1 className="pro-heading" style={{ textAlign: "center" }}>
        Price List
      </h1>
      <div className="price">
        <Price />
      </div>
      <Footer />
    </>
  );
};

export default Project;
