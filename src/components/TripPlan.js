// TripPlanner.js

import React, { useState } from 'react';
import './Trip.css';

function TripPlanner() {
  const [trip, setTrip] = useState([]);
  const [newActivity, setNewActivity] = useState({
    date: '',
    place: '',
    note: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const addActivity = () => {
    setTrip([...trip, newActivity]);
    setNewActivity({ date: '', place: '', note: '' });
  };

  const removeActivity = (index) => {
    const updatedTrip = [...trip];
    updatedTrip.splice(index, 1);
    setTrip(updatedTrip);
  };

  return (
    <div className="trip-planner">
      
      <h1>Trip Planner</h1>
      <div className="activity-form">
        <input
          type="text"
          name="date"
          className='daate'
          placeholder="Date"
          value={newActivity.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="place"
          className='plaace'
          placeholder="Place"
          value={newActivity.place}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="note"
          className='nootte'
          placeholder="Note"
          value={newActivity.note}
          onChange={handleInputChange}
        />
        <button onClick={addActivity}>Add</button>
      </div>
      <div className="activity-list">
        {trip.map((activity, index) => (
          <div key={index} className="activity-item">
            <p>Date: {activity.date}</p>
            <p>Place: {activity.place}</p>
            <p>Note: {activity.note}</p>
            <button onClick={() => removeActivity(index)}>Remove</button>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default TripPlanner;
