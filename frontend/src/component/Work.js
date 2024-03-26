import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const { yScroll } = useScroll();
  return (
    <>
      <motion.div
        className="work-container"
        style={{ scale: yScroll }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h1 className="pro-heading" style={{ textAlign: "center" }}>
          Project
        </h1>
        <div className="project-container">
          {WorkCardData.map((val, ind) => {
            return (
              <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Work;
