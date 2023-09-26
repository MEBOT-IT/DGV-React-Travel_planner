import React, { useState, useEffect } from "react";
import "./Count.css";
import Mobile from "../images/Mobile.png";
function Count() {
  // Initialize the count to 0
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Define the end state you want to reach
    const endState = 25000; // You can change this to your desired end state
    const duration = 10000; // Total duration for the count to reach the end state (in milliseconds)

    // Calculate the increment amount based on the duration and end state
    const incrementAmount = Math.ceil(endState / (duration / 1000));

    // Start increasing the count automatically
    const interval = setInterval(() => {
      if (count < endState) {
        setCount((prevCount) => prevCount + incrementAmount);
      } else {
        clearInterval(interval); // Stop the interval when the end state is reached
      }
    }, 1000); // Increase the count every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div id="count-full">
      <div className="travel-planner">
        <p id="countp1">
          Number of people who have
          <br />
          taken our travel planner{" "}
        </p>
        <p id="countp2"> {count}</p>
        <img src={Mobile} id="mobStyle" />
      </div>
    </div>
  );
}

export default Count;
