import React, { useState } from "react";
import "./Form.css";

function Darjeelingflip() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can perform any actions you need with the form data

    // After processing, show the popup
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="booking-form-container9">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-title">
              <ol>PACKAGE PER PERSON</ol>
              <br></br>
              <ol>RS.21800/-</ol>
            </h2>
            <p className="card-text"> </p>
          </div>
          <div className="card-back">
            <h3 className="card-title">
              <ul>
                <li>TRIP FROM - Flight(YOUR PLACE)</li>
              </ul>
              <ul>
                <li>TRIP TO - Dareeling</li>
              </ul>
              <ul>
                <li>DURATION - 5 Nights/ 6 Days</li>
              </ul>
              <ul>
                <li>ACCOMODATION - Hotels Provided</li>
              </ul>
              <ul>
                <li>TRANSPORTATION - Private A/C Coach</li>
              </ul>
            </h3>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <div className="booking-form">
        <h2>Travel For Enough!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">No of persons</label>
            <input type="text" id="destination" name="destination" required />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default Darjeelingflip;
