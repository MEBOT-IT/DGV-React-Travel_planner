import React from "react";
import { Carousel } from "react-carousel-minimal";

// Import your images
import pic1 from "../images/dar.jpg";
import pic3 from "../images/dar2.jpg";
import pic2 from "../images/dar3.jpg";
import pic4 from "../images/dar4.jpg";
// Replace with the correct path to your image file

function Darjeelingslider() {
  const data = [
    {
      image: pic1, // Use the imported image
      caption: "Queen of the hills but darling you're the queen of my heart",
    },
    {
      image: pic2,
      caption: "Queen of the hills but darling you're the queen of my heart",
    },
    {
      image: pic3,
      caption: "Queen of the hills but darling you're the queen of my heart",
    },
    {
      image: pic4,
      caption: "Queen of the hills but darling you're the queen of my heart",
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
        width="2000px"
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

export default Darjeelingslider;
