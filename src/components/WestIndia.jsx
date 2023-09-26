import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./Proone.css";
import { BiTimeFive } from "react-icons/bi";
import goa from "../images/goa.jpg";
import gujarat from "../images/gujarat.jpg";
import mumbai from "../images/mumbai.jpg";
import pune from "../images/pune.jpg";
import goa2 from "../images/ggoa2.jpg";
import maharastra from "../images/maharastra.jpg";

const WestIndia = () => {
  return (
    <div>
      <span className="found">6 tours found</span>
      <div className="pic-31">
        <img src={goa} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">goa , india</span>
        </p>
        <div id="mdu">enchanting goa special</div>
        <span id="enddd">tour</span>
        <BiTimeFive className="icon" />
        <span className="plan">6 nights 7 days</span>
      </div>
      <div className="pic-32">
        <img src={gujarat} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">gujarat , india</span>
        </p>
        <div id="mdu">gujarat best tourism</div>
        <span id="enddd">package </span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-33">
        <img src={mumbai} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">mumbai , india</span>
        </p>
        <div id="mdu">best mumbai tourism</div>
        <span id="enddd">package </span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-34">
        <img src={pune} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">pune , india</span>
        </p>
        <div id="mdu">go pune love pune</div>
        <span id="enddd">best tourism spot </span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-35">
        <img src={goa2} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">goa , india</span>
        </p>
        <div id="mdu">aswem beach goa</div>
        <span id="enddd">come enjoy goa</span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-36">
        <img src={maharastra} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">maharastra , india</span>
        </p>
        <div id="mdu">maharastra tourism special</div>
        <span id="enddd">package</span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
    </div>
  );
};

export default WestIndia;
