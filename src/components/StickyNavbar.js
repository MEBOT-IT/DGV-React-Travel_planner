import React, { useState } from "react";
import "./StickyNavbar.css";
import TrekTales1 from "../images/logo.jpg";
import { Link } from "react-router-dom";
// import loginIcon from '../images/loginIcon.png'
import loginIcon from "../images/loginIcon.png";
// import BgVideo from "./BgVideo";
function StickyNavbar() {
  var scrollsmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
     
    });
    
  };
 
  return (
    <div>
      <header>
        <div id="navbaaar">
          <ul>
            <img
              id="ourLogo"
              src={TrekTales1}
              alt="Logo"
              width="300px"
              height="90px"
            />
            <li className="lidec">
              <a href="#">
                <Link to="/home">Home</Link>
              </a>
            </li>
            {/* <li className="lidec">
              <a href="#">Travel guide</a>
            </li> */}
            <li className="lidec">
              <Link to="/package">Packages</Link>
            </li>
            <li className="lidec" onClick={scrollsmooth}>
              <a href="#">About us</a>
            </li>
            <li className="lidec">
              <Link to="/cruises">
                {" "}
                <a href="#">cruises</a>
              </Link>
            </li>
            {/* <li> */}

            {/* </li> */}
            {/* <div className="login-button">
              <span className="login-symbol">🔒</span> Login
            </div> */}
          </ul>
          <Link to="/profile">
            <img
              src={loginIcon}
              className="profile"
              width="50px"
              height="50px"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default StickyNavbar;
