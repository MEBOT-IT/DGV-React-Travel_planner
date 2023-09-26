import React from "react";
import { Link } from "react-router-dom";
import "./Planning.css";

function Planning() {
  return (
    <div id="plan-full">
      <h1 id="ready">Ready to plan your trip in half the time?</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/master-plan">
        <button className="bttn">Start Planning</button>
      </Link>
    </div>
  );
}

export default Planning;
