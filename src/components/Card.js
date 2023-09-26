import React, { useState } from "react";
import "./Card.css";
import { FaPeriscope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import card1 from "../images/cruises-2.webp";
import card2 from "../images/cruises-3.webp";
import card3 from "../images/cruises-4.jpg";
import card4 from "../images/cruises-5.webp";
import card5 from "../images/cruises-6.jpeg";
import card6 from "../images/cruises-7.jpg";
import card7 from "../images/cruises-8.jpg";
import card8 from "../images/cruises-9.jpg";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <div className="caarrd">
          <img src={card1}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Mumbai-Goa-Mumbai
            <br />2 Nights|sundowner to Goa
          </p>
          <h5 id="clock">
            <FaClock />2 Nights
          </h5>
        </div>
        <div className="card1">
          <img src={card2}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Visakhapatnam - at Sea – Puducherry – Chennai 2 <br />
            Nights|2 Nights sundowner to Goa
          </p>
          <h5 id="clock">
            <FaClock />2 Nights
          </h5>
        </div>
        <div className="card2">
          <img src={card3}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Chennai - High Seas - Male - Goa - Mumbai
            <br />7 Nights|Coastal Odessy
          </p>
          <h5 id="clock">
            <FaClock />7 Nights
          </h5>
        </div>
        <div className="card3">
          <img src={card4}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Mumbai - High Seas - High Seas - Goa-Mumbai
            5<br /> Nights | 5 Nights to Kadamal Goa
          </p>
          <h5 id="clock">
            <FaClock />5 Nights
          </h5>
        </div>
      </div>
      <div className="container1">
        <div className="card4">
          <img src={card5}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Mumbai - Dui - Mumbai
            <br />2 Nights | Cruise to Diu
          </p>
          <h5 id="clock">
            <FaClock />2 Nights
          </h5>
        </div>
        <div className="card5">
          <img src={card6}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Chennai | Jaffna(Kankasanturei) | Chennai
           2 Nights | <br /> Sri Lankan Weekender
          </p>
          <h5 id="clock">
            <FaClock />2 Nights
          </h5>
        </div>
        <div className="card6">
          <img src={card7}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Chennai - High Seas - Colombo
           2 Nights | Sundowner Cruise to Colombo
          </p>
          <h5 id="clock">
            <FaClock />2 Nights
          </h5>
        </div>
        <div className="card7">
          <img src={card8}></img>
          <p></p>
          <p>
            <FaPeriscope />
            Mumbai - Kochi - Lakshadweep(Kadmat) - Mumbai
            5 Nights | <br />5 Nights to Kochi & Kadmat
          </p>
          <h5 id="clock">
            <FaClock />5 Nights
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
