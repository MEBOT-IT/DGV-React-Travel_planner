import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import rev1 from "../images/rev1.png";
import rev2 from "../images/rev2.png";
import rev3 from "../images/rev3.png";
import rev4 from "../images/rev4.png";
import rev5 from "../images/rev5.png";
import rev6 from "../images/rev6.png";
import rev7 from "../images/rev7.png";
import rev8 from "../images/rev8.png";
// import rev9 from "../images/rev9.png";

import "./Slider.css";
function Slider() {
  return (
    <div id="slider-full">
      <h1 id="heading1">Oru Happy Clients</h1>
      <br></br>
      <br></br>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rating-slide">
          <img src={rev1} />
          <img src={rev2} />
          <img src={rev3} />
        </SwiperSlide>
        <SwiperSlide className="rating-slide">
          <img src={rev4} />
          <img src={rev5} />
          <img src={rev6} />
        </SwiperSlide>
        <SwiperSlide className="rating-slide">
          <img src={rev7} />
          <img src={rev8} />
          <img src={rev8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
