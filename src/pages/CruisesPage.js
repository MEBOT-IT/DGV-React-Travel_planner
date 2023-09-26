import React from "react";
import StickyNavbar from "../components/StickyNavbar";
import Card from "../components/Card";
import Cruises from "../components/Cruises";
const CruisesPage = () => {
  return (
    <div>
      <StickyNavbar/>
      <Cruises />
      <Card />
    </div>
  );
};

export default CruisesPage;
