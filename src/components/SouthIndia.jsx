import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./Proone.css";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import Madurai from "../images/Madurai.jpg";
import Kodaikanal from "../images/Kodaikanal.jpg";
import Ooty from "../images/Ooty.jpg";
import chennai from "../images/chennai.jpg";
import tanjore from "../images/Tanjore.jpg";
import bangalore from "../images/bangalore.webp";
import kerala from "../images/kerala.webp";
import tirupati from "../images/tirupati.jpg";
import hyderabad from "../images/hyderabad.jpg";
import cochin from "../images/cochin.jpg";
import lakshadweep from "../images/lakshadweep.jpg";
import andaman from "../images/andaman.jpg";
import kanyakumari from "../images/kanyakumari.jpg";
import coorg from "../images/coorg.jpg";
import calicut from "../images/calicut.jpg";

const SouthIndia = () => {
  return (
    <div>
      <span className="found">15 tours found</span>
      <div className="pic-1">
        <img src={Madurai} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Madurai, tamilnadu</span>
        </p>
        <div id="mdu">Madurai Meenakshi Amman</div>
        <span id="enddd"> Darshan Package</span>

        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-2">
        <img src={Kodaikanal} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad"> Kodaikanal ,dindugal ,tamilnadu</span>
        </p>
        <div id="mdu">Kodaikanal Special Holiday</div>
        <span id="enddd"> Package</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-3">
        <img src={Ooty} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Ooty ,nilgiris</span>
        </p>
        <div id="mdu">Ooty Special Holiday</div>
        <span id="enddd"> Package</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-4">
        <img src={chennai} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Chennai ,tamilnadu</span>
        </p>
        <div id="mdu">Chennai Weekend Holiday</div>
        <span id="enddd"> Package</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-5">
        <img src={tanjore} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Tanjore ,tamilnadu</span>
        </p>
        <div id="mdu">Tanjore Brihadeeswarar Temple</div>
        <span id="enddd">Darshan Package</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-6">
        <Link to="/bang">
          {" "}
          <img src={bangalore} className="madurai" />
        </Link>
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Bangalore ,india</span>
        </p>
        <div id="mdu"> sweet Bangalore tourism </div>
        <span id="enddd"> pay a visit</span>
        <BiTimeFive className="icon" />
        <span className="plan"> nights 4 days</span>
      </div>
      <div className="pic-7">
        <img src={kerala} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Kerala ,india</span>
        </p>
        <div id="mdu">wonders of Kerala </div>
        <span id="enddd"> come and enjoy</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-8">
        <img src={tirupati} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad"> Tirupati , andhra pradhesh</span>
        </p>
        <div id="mdu">Tirupati Venkateshwara Temple</div>
        <span id="enddd">Darshan Package</span>
        <BiTimeFive className="icon" />
        <span className="plan">2 nights 3 days</span>
      </div>
      <div className="pic-9">
        <img src={hyderabad} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Hyderabad ,india</span>
        </p>
        <div id="mdu">Hyderabad Delight</div>
        <span id="enddd"> 4 day tourism</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-10">
        <img src={cochin} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad">Kerala, Cochin</span>
        </p>
        <div id="mdu">enhanting Cochin beach </div>
        <span id="enddd"> with 4 days</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-11">
        <img src={lakshadweep} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> lakshadweep ,india</span>
        </p>
        <div id="mdu">mystic bangaram island </div>
        <span id="enddd"> magical island</span>
        <BiTimeFive className="icon" />
        <span className="plan">6 nights 7 days</span>
      </div>
      <div className="pic-12">
        <img src={andaman} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad"> andaman and nicobar , india</span>
        </p>
        <div id="mdu"> andaman and nicobar island </div>
        <span id="enddd">astonishing island</span>
        <BiTimeFive className="icon" />
        <span className="plan">6 nights 7 days</span>
      </div>
      <div className="pic-13">
        <img src={kanyakumari} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp />{" "}
          <span className="mad"> kanyakumari , tamilnadu</span>
        </p>
        <div id="mdu">glimpse of kanyakumari </div>
        <span id="enddd"> be cool</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-14">
        <img src={coorg} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> coorg , karnataka</span>
        </p>
        <div id="mdu"> escape to coorg enjoy </div>
        <span id="enddd"> 4 day trip</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
      <div className="pic-15">
        <img src={calicut} className="madurai" />
        <p id="loc-1">
          <IoLocationSharp /> <span className="mad"> Calicut, kerala</span>
        </p>
        <div id="mdu"> visit to Calicut enjoy</div>
        <span id="enddd"> tourism</span>
        <BiTimeFive className="icon" />
        <span className="plan">3 nights 4 days</span>
      </div>
    </div>
  );
};

export default SouthIndia;
