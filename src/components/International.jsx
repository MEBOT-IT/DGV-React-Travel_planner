import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./Proone.css";
import { BiTimeFive } from "react-icons/bi";
import Disneyland from "../images/Disneyland.webp";
import Singapore from "../images/Singapore.jpg";
import America from "../images/America.jpg";
import Paris from "../images/Paris.jpg";
import Bangkok from "../images/Bangkok.webp";
import Maldives from "../images/Maldives.jpg";
import {Link} from 'react-router-dom'

const International = () => {
  return (
    <div>
      <span className="found">6 tours found</span>
      <div className="pic-37">
       <Link to='/hongg'> <img src={Disneyland} className="madurai" /></Link>
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">disneyland , hong kong</span>
        </p>
        <div id="mdu">wonderfull hong kong with</div>
        <span id="enddd">disneyland tour</span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
      <div className="pic-38">
        <img src={Singapore} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">east coast park , singapore</span>
        </p>
        <div id="mdu">sizzling singapore visit</div>
        <span id="enddd">east coast park</span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
      <div className="pic-39">
        <img src={America} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">dallas world aquarium , america</span>
        </p>
        <div id="mdu">enter america's most popular </div>
        <span id="enddd">world aquarium</span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
      <div className="pic-40">
        <img src={Paris} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">grande galerie , paris</span>
        </p>
        <div id="mdu">grande galerie de l'evolution </div>
        <span id="enddd">just enter paris world</span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
      <div className="pic-41">
        <img src={Bangkok} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">siam park city , bangkok </span>
        </p>
        <div id="mdu">bangkok fantasy special</div>
        <span id="enddd">package</span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
      <div className="pic-42">
        <img src={Maldives} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad">milaidhoo island , maldives </span>
        </p>
        <div id="mdu">under water restaurent </div>
        <span id="enddd">maldives heaven on earth </span>
        <BiTimeFive className="icon" />
        <span className="plan">11 nights 12 days</span>
      </div>
    </div>
  );
};

export default International;
