import React from "react";
import TripPlan from "../components/TripPlan";
import Location from "../components/Location";
import BudgetTracker from "../components/BudgetTracker";

const Customize = () => {
  return (
    <div>
      <Location />
      <TripPlan />
      <BudgetTracker />
    </div>
  );
};

export default Customize;
