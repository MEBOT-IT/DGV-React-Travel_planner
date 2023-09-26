import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./Proone.css";
import { BiTimeFive } from "react-icons/bi";
import WestBengal from "../images/WestBengal.jpg";
import {Link} from 'react-router-dom'
import Darjeeling from "../images/Darjeeling.webp";
import Odisa from "../images/Odisa.jpg";
import Darjeeling2 from "../images/Darjeeling2.webp";
import Jharkhand from "../images/Jharkhand.jpg";
import Arunachal from "../images/Arunachala Pradhesh.jpg";

const EastIndia = () => {
  return (
    <div>
      <span className="found">6 tours found</span>
      <div className="pic-25">
        <img src={WestBengal} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">west bengal , india</span>
        </p>
        <div id="mdu">enjoy west bengal historical </div>
        <span id="enddd">places tour</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
      <div className="pic-26">
        <Link to='/dargg'><img src={Darjeeling} className="madurai" /></Link>
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">darjeeling , india</span>
        </p>
        <div id="mdu">discover darjeeling and </div>
        <span id="enddd">ganglok tour</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
      <div className="pic-27">
        <img src={Odisa} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">odisa , india</span>
        </p>
        <div id="mdu">pay and visit odisa</div>
        <span id="enddd">enjoy odisa</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
      <div className="pic-28">
        <img src={Darjeeling2} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">darjeeling , india</span>
        </p>
        <div id="mdu">unspoiled hills tour</div>
        <span id="enddd">pay and celeberate</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
      <div className="pic-29">
        <img src={Jharkhand} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">Jharkhand , india</span>
        </p>
        <div id="mdu">attraction of Jharkhand</div>
        <span id="enddd">tourist package</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
      <div className="pic-30">
        <img src={Arunachal} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">arunachal pradesh , india</span>
        </p>
        <div id="mdu">eastern arunachal pradesh</div>
        <span id="enddd">tourist package</span>
        <BiTimeFive className="icon" />
        <span className="plan">5 nights 6 days</span>
      </div>
    </div>
  );
};

export default EastIndia;
