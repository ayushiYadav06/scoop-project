import React from "react";
import logo from "../../assests/careerImg/Group 85.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <img className="header-logo" src={logo} alt="" />
      </div>
      <div className="inner-right-content">
        <ul>
          <li>
            Explore Courses <FontAwesomeIcon icon={faAngleDown} />{" "}
          </li>
          <li>
            Career Schools <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li style={{ color: "red" }}>Placements</li>
          <li style={{ color: "red" }}>Create an account</li>
          <li>
            <button className="login">Log In</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
