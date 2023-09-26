import React, { useState } from "react";
import "./Last.css";

function Last() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    destination: "",
    numberOfPeople: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any actions with the form data (formData)

    // After processing, show the popup
    setShowPopup(true);

    // Reset the form fields
    setFormData({
      name: "",
      date: "",
      time: "",
      destination: "",
      numberOfPeople: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="last">
      <div className="dream">
        <h2>Book Your Dream Vacay Today!</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="nameee">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div className="field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="field">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="field">
            <label htmlFor="numberOfPeople">Phone no</label>
            <input
              type="text"
              id="numberOfPeople"
              name="numberOfPeople"
              required
              value={formData.numberOfPeople}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>
              Thanks for contacting us!We will be in touch with you shortly.
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Last;
