import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <br/>
      <br/>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kuldeep.singh.cs23@iilmcet.ac.in</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kuldeep-singh-9a3b741a6" target='_blank'><Linkedin className="f-icon"color="white"size={"3rem"}/></a>
          <a href="https://github.com/KuldeepSingh00048" target='_blank'><Gitub className="f-icon" color="white" size={"3rem"} /></a>
          <a href=""><Insta  target='_blank'className="f-icon" color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
