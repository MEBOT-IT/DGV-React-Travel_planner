import React from 'react';
import { Carousel } from 'react-carousel-minimal';

// Import your images
import pic1 from '../images/bang5.jpg'; 
import pic3 from '../images/bang1.webp';
import pic2 from '../images/bang2.webp';
import pic4 from '../images/bang3.webp';
 // Replace with the correct path to your image file

function Bangaloreslider() {
  const data = [
    {
      image: pic1, // Use the imported image
      caption: "FEEL THE SMELL OF EARTH, AND LEAVE THE SMELL OF YOU"
    },
    {
      image: pic2,
      caption: "FEEL THE SMELL OF EARTH, AND LEAVE THE SMELL OF YOU"
    },
    {
      image: pic3,
      caption: "FEEL THE SMELL OF EARTH, AND LEAVE THE SMELL OF YOU"
    },
    {
      image: pic4,
      caption: "FEEL THE SMELL OF EARTH, AND LEAVE THE SMELL OF YOU"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'italic',
    backgroundColor: 'transparent',
    color:'white',
  }

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

export default Bangaloreslider;
