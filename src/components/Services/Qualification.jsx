import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import tenth from "../../img/tenth.png";
import twelth from "../../img/twelth.png";
import batchelor from "../../img/batchelor.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Qualification = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="qualification">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        {/* <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span> */}
        <span> My Qualification</span>
        <spane>
          My education Journey from
          <br />
          2006 - Till Now
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={batchelor}
            heading={"Batchelor's(2019-2023)"}
            detail={"IILM College AHL, AKTU"}
            marks={"72.7%(Till Now)"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={twelth}
            heading={"Intermediate (2019)"}
            detail={"TATA DAV Public School,WBD, Ghatotand"}
            marks={"76%"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={tenth}
            heading={"Matrics (2017)"}
            detail={"TATA DAV Public School,WBD, Ghatotand"}
            marks={"7.8 CGPA"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Qualification;
