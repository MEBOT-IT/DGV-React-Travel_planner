import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Plan.css";
import StickyNavbar from "../components/StickyNavbar";
import { Link } from "react-router-dom";
//import video from './ocean.mp4'
// import { GrFormAdd } from "react-icons/gr";

function App() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  //   const [autoGenerate, setAutoGenerate] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailIconClick = () => {
    setShowEmailInput(true);
  };

  const handleSendEmail = () => {
    emailjs.init("8JPhWJWe2kWb8IXS1"); // public API key

    const templateParams = {
      destination,
      startDate,
      endDate,
      email,
    };

    emailjs
      .send("service_wsfbxko", "template_i9zs8xq", templateParams) //service id, template id
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Email failed to send:", error);
          alert("Email failed to send. Please try again later.");
        }
      );

    setEmail("");
    setShowEmailInput(false);
  };

  return (
    <div className="Apppp">
      <StickyNavbar />
      {/* <video src={video} autoPlay loop muted className='kolantha'/> */}
      <header className="App-header">{/* <StickyNavbar /> */}</header>
      <div className="containerrr">
        <div className="flex-container">
          <div className="destination"></div>
          <label id="where">Where To?</label>
          <input
            type="text"
            className="destination-field"
            placeholder="e.g. Paris, Maldives, Bali"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <div id="start-date">
            <label id="start">Start Date</label>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div id="end-date">
            <label id="end">End Date</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={endDate}
              className="datee"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          {/* <div className="auto-generate">
          <label>
            <input
              type="checkbox"
              id='auto-gen'
              checked={autoGenerate}
              onChange={(e) => setAutoGenerate(e.target.checked)}
            />
            Auto Generate Itinerary
          </label>
        </div> */}
          {showEmailInput ? (
            <div className="email-input">
              <input
                type="email"
                className="ttarr"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="seennd-email" onClick={handleSendEmail}>
                Send Email
              </button>
            </div>
          ) : (
            <div className="email-icon" onClick={handleEmailIconClick}>
              <span role="img" aria-label="Email">
                <label id="invite">Invite Friends</label>
                <div id="addplus"> ➕ </div>
                <h1 id="add-icon">{/* <GrFormAdd /> */}</h1>
              </span>
            </div>
          )}
        </div>
      </div>
      <Link to="/customize">
        <button className="start-planning">Start Planning</button>
      </Link>
    </div>
  );
}

export default App;
