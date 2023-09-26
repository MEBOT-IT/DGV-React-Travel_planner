import React from "react";
import MapOneView from "../images/MapOneView.mp4";
import "./MapViewVideo.css";
function MapViewVideo() {
  return (
    <div>
      <div className="oneView">
        <video className="videoStyle" src={MapOneView} autoPlay loop muted />
        <div>
          <h2 className="heading2">
            Your itinerary and<br></br>
            your map in one view
          </h2>
          <br></br>
          <p className="content2">
            No more switching between<br></br>
            different apps, tabs, and tools to<br></br>
            keep track of your travel plans.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MapViewVideo;
