import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Proone.css";
import { BiTimeFive } from "react-icons/bi";
import NewDelhi from "../images/NewDelhi.jpg";
import UtterPradhesh from "../images/UtterPradhesh.jpg";
import Allahabad from "../images/Allahabad.jpg";
import Uttarakhand from "../images/Uttarakhand.jpg";
import Rajasthan from "../images/Rajasthan.jpg";
import Punjab from "../images/Punjab.png";
import Kashmir from "../images/Kashmir.jpg";
import Chandigarh from "../images/Chandigarh.jpg";
import Ladakh from "../images/Ladakh.jpg";

const NorthIndia = () => {
  return (
    <div>
      <span className="found">9 tours found</span>
      <div className="pic-16">
        <img src={NewDelhi} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">haridwar , new delhi</span>
        </p>
        <div id="mdu"> 3 nights haridwar - rishikesh</div>
        <span id="enddd"> tourism</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-17">
        <img src={UtterPradhesh} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">taj mahal , utter pradesh</span>
        </p>
        <div id="mdu"> taj mahal tourt package</div>
        <span id="enddd"> for 3 days</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-18">
        <img src={Allahabad} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">Varanasi, Bodhgaya, Allahabad</span>
        </p>
        <div id="mdu">Varanasi Bodh gaya</div>
        <span id="enddd"> tour package</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-19">
        <img src={Uttarakhand} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">Corbett National Park,Uttarakhand</span>
        </p>
        <div id="mdu">exotic Corbett National Park</div>
        <span id="enddd">tourist package</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-20">
        <img src={Rajasthan} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">jaipur , rajasthan</span>
        </p>
        <div id="mdu">regal rajasthan special tour</div>
        <span id="enddd"> package</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-21">
        <img src={Punjab} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">punjab , india</span>
        </p>
        <div id="mdu">marvellous punjab tourism </div>
        <span id="enddd"> package</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-22">
        <Link to="/explore">
          {" "}
          <img src={Kashmir} className="madurai" />
        </Link>
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">jammu and kashmir , india</span>
        </p>
        <div id="mdu">jammu and kashmir one </div>
        <span id="enddd">of the best tourist spot</span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-23">
        <img src={Chandigarh} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">chandigarh , india</span>
        </p>
        <div id="mdu">fantastic chandigarh tourism </div>
        <span id="enddd">package</span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
      <div className="pic-24">
        <img src={Ladakh} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">ladakh , india</span>
        </p>
        <div id="mdu">enchanting ladakh tourism </div>
        <span id="enddd">for 4 nights</span>
        <BiTimeFive className="icon" />
        <span className="plan">4 nights 5 days</span>
      </div>
    </div>
  );
};

export default NorthIndia;
