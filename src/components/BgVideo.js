import React from "react";
import bg from "../images/bg1.jpg";
import "./BgVideo.css";
// import TrekTales from './images/TrekTales1.gif'
import Whatsapp from "../images/Whatsapp.png";
import { Link } from "react-router-dom";

function BgVideo() {
  return (
    <div className="Main">
      <img src={bg} id="bgimg" />
      {/* <img src={TrekTales} id='mainimg' alt="Logo" width="210px" height="170px"/> */}
      {/* <h1 id='mainh1'>TrekTales</h1><br/><br/><br/> */}
      <p id="mainp">
        You'll never travel without
        <br />
        our trip planner again
      </p>

      <div id="scroll">
        <a
          id="whatsLink"
          target="_blank"
          href="https://chat.whatsapp.com/EuYnKIqBDLWJFRGXoRh1Zh"
        >
          <img id="whatsapp" src={Whatsapp} />
        </a>{" "}
      </div>
      <Link to="/master-plan">
        <button id="sp">START PLANNING</button>
      </Link>
    </div>
  );
}

export default BgVideo;

