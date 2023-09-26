import React, { useState } from "react";
import "./Proone.css";
import { IoLocationSharp } from "react-icons/io5";
import SouthIndia from "../components/SouthIndia";
import NorthIndia from "../components/NorthIndia";
import EastIndia from "../components/EastIndia";
import WestIndia from "../components/WestIndia";
import International from "../components/International";
import video from "../images/ProVideo.mp4";

const Proone = () => {
  var [place, setPlace] = useState("");
  var [isOpen, setIsOpen] = useState(false);
  var [displaycom, setDisplaycom] = useState(null);
  var [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "North-India",
    "South-India",
    "West-India",
    "East-India",
    "International",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setPlace(option);
  };

  var search = () => {
    if (place === "South-India") {
      setDisplaycom(<SouthIndia />);
    } else if (place === "North-India") {
      setDisplaycom(<NorthIndia />);
    } else if (place === "East-India") {
      setDisplaycom(<EastIndia />);
    } else if (place === "West-India") {
      setDisplaycom(<WestIndia />);
    } else if (place === "International") {
      setDisplaycom(<International />);
    } else {
      setDisplaycom("");
    }
    setPlace("");
    setSelectedOption(null);
  };

  return (
    <div className="fullvideo">
      <body>
        {/* <div className="vdo"> */}
        <video src={video} autoPlay loop muted className="vddo" />
        {/* </div> */}
        <div className="white">
          <label className="label">
            <br /> destination
          </label>
          <div className="App">
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
              <button className="dropdown-buttonnn" onClick={toggleDropdown}>
                {selectedOption || "Where are you going?"}
              </button>
              <ul className="dropdown-list">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button onClick={search} className="search">
            search
          </button>
          <IoLocationSharp className="loc" />
        </div>
        <div>{displaycom}</div>
        
      </body>
    </div>
  );
};

export default Proone;
