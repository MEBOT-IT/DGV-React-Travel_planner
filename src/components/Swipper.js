import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import newyork from "../images/newyork.jpeg";
import tower from "../images/tower.jpg";
import statue from "../images/statue.jpg";
import USA from "../images/USA.jpg";
import beach from "../images/beach.jpg";
import trek from "../images/trek.jpg";

import "./Swipper.css";
function Swipper() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div id="swwipper-full">
      <h1 id="dnfd">Discover your next favorite destination</h1>
      <h3 id="gifg">
        Get inspired from guides around the world — with expert tips and <br />
        recommendations from the Trek Tales community.
      </h3>
      <Swiper
        rewind={false}
        navigation={true}
        modules={[Navigation]}
        className="myySwiper2"
      >
        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        ></div>
        <SwiperSlide className="rating-slide2">
          <img src={newyork} />
          <img src={tower} />
          <img src={statue} />
          <img src={USA} />
        </SwiperSlide>
        <SwiperSlide className="rating-slide2">
          <img src={beach} />
          <img src={trek} />
          <img src={newyork} />
          <img src={tower} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipper;
