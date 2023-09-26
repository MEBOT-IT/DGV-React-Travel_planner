import React from "react";
import "./ImageTextComponent.css";
import time from "../images/time.jpg";

const ImageTextComponent = () => {
  return (
    <div className="container1">
      <div className="image-text-container">
        <div className="image-containerrr">
          <img src={time} alt="#" />
        </div>
        <div className="text-container"></div>

        <div className="one">
          <div className="part-1">
            <h2>Own Pace</h2>
            <p>
              Scheduled tours, which often depart <br /> on predetermined,
              non-negotiable
              <br />
              dates, contain a circuit of famous
              <br /> sights grouped around a theme for
              <br />
              medium to large groups.
            </p>
          </div>
          <div className="part-2">
            <h2>Secured</h2>
            <p>
              We will protect any information our
              <br /> clients share with us by adhering to
              <br /> strong security and confidentiality
              <br /> requirements.{" "}
            </p>
          </div>
        </div>
        <div className="secondd">
          <div className="part-1">
            <h2>Complements</h2>{" "}
            <p>
              We encourage you to explore one-of-
              <br /> a-kind VIP Experiences that are
              <br /> exclusively available to Luxury Gold
              <br /> guests. VIP Experiences make you happy.
            </p>
          </div>
          <div className="part-2">
            <h2>Guidance</h2>{" "}
            <p>
              Private letters with full staff.
              <br /> Excursions with an experienced
              <br />
              captain and a passionate local guide
              <br /> who knows very well about this place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
