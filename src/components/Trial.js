import React, { useState } from "react";

import ImageTextComponent from "./ImageTextComponent";
// import Bangloreflip from "./Bangloreflip";
import FAQ from "./FAQ";
import Last from "./Last";




const Trial = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "DAY 1: BANGALORE",
      answer: [<li>
        Arrive at Bangalore Airport and transfer to hotel.</li>,
        <li>Dinner at hotel.</li> ,
      <li>Overnight at Hotel in Srinagar.</li>
      ],
      open: true
    },
    {
      question: "DAY2: Arrive at Coorg,Welcome to the City of Steep Hills & Countless Streams",
      answer: [<li>
        After breakfast proceed to Steep.</li>,
        <li>Lunch at Steep.</li> ,
      <li>Evening return back to hotel.</li>,
      <li>Dinner at Hotel.</li>,
      <li>Overnight stay at Coorg.</li>
      ],
      open: false
    },
    {
      question: "DAY3:Coorg Sightseeing Enjoy Visit to the Dubare Elephant Camp",
      answer: [<li>
        After breakfast transfer to Elephant Camp.</li>,
      <li>Evening return back to hotel.</li>,
      <li>Dinner at Hotel.</li>,
      <li>Overnight stay.</li>
      ],
      open: false
    },
    {
      question: "DAY4: Coorg Sightseeing & Departure Enjoy Panoramic Views from the Raja's Seat",
      answer: [<li>
         Breakfast at hotel.</li>,
        <li>Visit Raja's Seat.</li> ,
      <li>Lunch at hotel.</li>,
      <li>Overnight stay.</li>],
      open: false
    },
    {
      question: "DAY5: DEPARTURE",
      answer: [<li>
         After breakfast check out of the hotel.</li>,
        <li>Transfer to the airport and depart with fond memories.</li> ,
      ],
      open: false
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  
  
    return(
        <div>
          <ImageTextComponent/>  
          {/* <Bangloreflip/> */}
         
          
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
         

      

        
          <Last/>
          
        </div>
   
          
      
      
    );

            }
export default Trial;



