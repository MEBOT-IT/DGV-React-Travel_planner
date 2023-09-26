import React from "react";
import "./Features.css";
import imgf1 from "../images/imgf1.png";
import imgf2 from "../images/imgf2.png";
import imgf3 from "../images/imgf3.png";
import imgf4 from "../images/imgf4.png";
import imgf5 from "../images/imgf5.png";
import imgf6 from "../images/imgf6.png";

function Features() {
  return (
    <div>
      <h1 className="hr">Features to replace all your other tools</h1>
      <br></br>
      <br></br>
      <br />
      <br />
      <div className="container1">
        <span>
          <img src={imgf1} /> <br></br>
          <br></br>
          <h2 className="con-h2">
            Add places from guides
            <br /> with 1 click
          </h2>
          <br></br>
          <p className="con-p">
            We crawled the web so you don’t have to. <br />
            Easily save mentioned places.
          </p>
        </span>
        <br />
        <br />
        <br />
        <span>
          <img src={imgf2} /> <br></br>
          <br></br>
          <h2 className="con-h2">
            Collaborate with friends in <br />
            real time
          </h2>
          <br></br>
          <p className="con-p">
            Plan along with your friends with live syncing <br />
            and collaborative editing.
          </p>
        </span>
        <br />
        <br />
        <br />
        <span>
          <img src={imgf3} /> <br></br>
          <br></br>
          <h2 className="con-h2">
            Import flight and hotel <br />
            reservations
          </h2>
          <br></br>
          <p className="con-p">
            Connect or forward your emails to get them <br />
            magically added into your trip plan.
          </p>
        </span>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container2">
        <span>
          <img id="img4" src={imgf4} /> <br></br>
          <br></br>
          <h2 className="con-h2">
            Optimize your <br />
            route
          </h2>
          <br></br>
          <p className="con-p">
            Perfect for road trips and saving $ on gas!
            <br /> Get the best route auto-rearranged.
          </p>
        </span>
        <br />
        <br />
        <br />
        <span className="cont2-2">
          <img src={imgf5} /> <br></br>
          <br></br>
          <h2 className="con-h2">
            Get personalized
            <br /> suggestions
          </h2>
          <br></br>
          <p className="con-p">
            Find the best places to visit with smart
            <br /> recommendations based on your itinerary.
          </p>
        </span>
        <br />
        <br />
        <br />
        <span className="cont2-2">
          <img src={imgf6} />
          <br></br>
          <br></br>
          <h2 className="con-h2">
            Export your places to <br />
            Google Maps
          </h2>
          <br></br>
          <p className="con-p">
            Synced automatically, for when plans<br></br>change.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Features;
