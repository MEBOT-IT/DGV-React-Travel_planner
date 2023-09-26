import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

const TravelBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noOfPersons: "",
    destination: "Srinagar",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/anotherPage/${formData.name}/${formData.email}/${formData.destination}/${formData.noOfPersons}`
    );
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
              <ol>RS.5000/-</ol>
            </h2>
            <p className="card-text"> </p>
          </div>
          <div className="card-back">
            <h3 className="card-title">
              <ul>
                <li>TRIP FROM - Chennai</li>
              </ul>
              <ul>
                <li>TRIP TO - Srinagar</li>
              </ul>
              <ul>
                <li>DURATION - 4 Nights/5 Days</li>
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
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfPersons">No of persons</label>
            <input
              type="text"
              id="noOfPersons"
              name="noOfPersons"
              value={formData.noOfPersons}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="book">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelBookingForm;
