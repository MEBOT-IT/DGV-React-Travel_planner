import React from "react";
import "./Cruises.css";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { FaPeriscope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import Cruises10 from "../images/cruises10.jpg";
import card3 from "../images/cruises-4.jpg";
import ship from "../images/ship1.jpg";
function Cruises() {
  return (
    <div className="crruu">
      <div>
        <img src={ship} className="shhiip" />
        <div className="cruises">
          <div className="home">
            <h5>Home</h5>
          </div>
          <div className="corderlla">
            <p>Cordelia Cruises</p>
          </div>
        </div>
        <div className="cruises1">
          <div className="trip1">
            <p>
              <Fa1 />
              Choose a Trip
            </p>
          </div>
          <div className="trip2">
            <p>
              <Fa2 />
              Buy tickets online
            </p>
          </div>
          <div className="trip3">
            <p>
              <Fa3 />
              Enjoy
            </p>
          </div>
          <button className="custoomm-button">VIEW ALL CRUISES</button>
        </div>
        <div className="cruises1">
          <p>— Cruise Overview</p>
        </div>
        <div className="view">
          <div className="overview">
            <h2>Cordelia Cruises Packages in India</h2>
            <p>
              How does the idea of “waking up to a new destination everyday”
              sound to you? Apparently, the imagination itself <br />
              creates goosebumps of excitement for all of us.
            </p>
            <p>
              What if we tell you that you can experience the voyage of the
              breathtaking Indian Ocean with Cordelia Cruises?
              <br /> Well, it sounds great. Isn’t it? The cruise tour will be
              launched in some fantastic destinations, like, Goa, Andaman,
              <br /> Kochi, Mumbai, Ganapatipule, Diu, and many other seaboard
              destinations.
              <br /> Cordelia Cruises is all set to serve you with the
              mesmerizing beauty of the Indian coastline.
              <br /> Click here to view all Cordelia Cruise Packages.
            </p>
          </div>
          <div className="tree">
            <img src={Cruises10}></img>
          </div>
        </div>
        <div className="available">
          <p>—Available Cruise Packages</p>
          <h1>Decide what do you want to do in Cordelia Cruises India</h1>
        </div>
      </div>
    </div>
  );
}

export default Cruises;
