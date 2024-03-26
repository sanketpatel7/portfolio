import React from "react";
import Header from "../component/Header";
import HeroImg from "../component/HeroImg";
import Footer from "../component/Footer";
import "../index.css";
import Work from "../component/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroImg />
      <div className="price">
        <Work />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
