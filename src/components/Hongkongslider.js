import React from "react";
import { Carousel } from "react-carousel-minimal";

// Import your images
import pic1 from "../images/hong1.jpg";
import pic3 from "../images/hong2.jpg";
import pic2 from "../images/hong3.jpg";
import pic4 from "../images/hong4.jpg";
// Replace with the correct path to your image file

function HongkongSlider() {
  const data = [
    {
      image: pic1, // Use the imported image
      caption: "Lost in a sea of neon lights in the heart of the city",
    },
    {
      image: pic2,
      caption: "Lost in a sea of neon lights in the heart of the city",
    },
    {
      image: pic3,
      caption: "Lost in a sea of neon lights in the heart of the city",
    },
    {
      image: pic4,
      caption: "Lost in a sea of neon lights in the heart of the city",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "italic",
    backgroundColor: "transparent",
    color: "white",
  };

  return (
    <div style={{
      width:`130%`,
      marginTop: `-50px`,
      marginLeft:`-170px`,
    }}>
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

export default HongkongSlider;
