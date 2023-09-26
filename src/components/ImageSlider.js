import React from "react";
import { Carousel } from "react-carousel-minimal";

// Import your images
import pic1 from "../images/nivi3.jpg";
import pic3 from "../images/nivi2.jpg";
import pic2 from "../images/nivi1.jpg";
import pic4 from "../images/nivi4.jpg";
// Replace with the correct path to your image file

function ImageSlider() {
  const data = [
    {
      image: pic1, // Use the imported image
      caption: "KASHMIR, WHERE EVERY SEASON IS A REASON TO FALL IN LOVE",
    },
    {
      image: pic2,
      caption: "KASHMIR, WHERE EVERY SEASON IS A REASON TO FALL IN LOVE",
    },
    {
      image: pic3,
      caption: "KASHMIR, WHERE EVERY SEASON IS A REASON TO FALL IN LOVE",
    },
    {
      image: pic4,
      caption: "KASHMIR, WHERE EVERY SEASON IS A REASON TO FALL IN LOVE",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "italic",
    backgroundColor: "transparent",
    color: "white",
  };

  return (
    <div
      style={{
        marginTop: `-50px`,
        width:`130%`,
        marginLeft:`-170px`,
      }}
    >
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="650px"
        opacity="0.1"
        captionStyle={captionStyle}
        radius="10px"
        captionPosition="center"
        automatic={true}
        showArrows={false}
        style={{
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default ImageSlider;
