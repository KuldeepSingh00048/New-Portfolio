import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/kd.jpg";
import glassesimoji from "../../img/images.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from './Kuldeep_SIngh_CV_2022.pdf';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* right image side */}
      <div className="i-right">
        <img className="boy" src={boy} alt="" />

        <motion.img
          style={{ left: "20%", top: "-10rem" }}
          whileInView={{ left: "37%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={crown} text1="MERN Stack" text2=" Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Kuldeep Singh</span>
          <span>
            Full Stack MERN Developer having experience in<br /> web designing
            and development, with  Quality work
          </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/kuldeep-singh-9a3b741a6"><img src={LinkedIn} alt="" /></a>
          <a href="https://github.com/KuldeepSingh00048"><img src={Github} alt="" /></a>
          <a href=""><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Intro;
