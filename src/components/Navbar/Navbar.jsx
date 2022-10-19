import React from "react";
import Toggle from "../Toggle/Toggle";
import logo from "../../img/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <img className="n-name" src={logo} alt="" />
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="qualification" spy={true} smooth={true}>
                  Qualification
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  Internships
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
