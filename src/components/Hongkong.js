import React, { useState } from "react";
import ImageTextComponent from "./ImageTextComponent";
// import Hongkongflip from "./Hongkongflip";
import FAQ from "./FAQ";
import Last from "./Last";

const Hongkong = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "DAY 1: Arrival in Hongkong",
      answer: [
        <li>Arrive at Airport and transfer to hotel.</li>,
        <li>Dinner at hotel.</li>,
        <li>Overnight stay.</li>,
      ],
      open: true,
    },
    {
      question: "DAY2:Welcome to the cosmopolitan Hong Kong",
      answer: [
        <li>breakfast at hotel.</li>,
        <li>Spend the first day of your Hong Kong holiday at leisure</li>,
        <li>Evening return back to hotel.</li>,
        <li>Dinner at beach restarunt.</li>,
        <li>Overnight stay.</li>,
      ],
      open: false,
    },

    {
      question: "DAY3: Hong Kong city tour",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>Visit Victoria Peak.</li>,
        <li>hotspot is the old-fashioned Aberdeen Fishing Village.</li>,
        <li>Overnight stay.</li>,
      ],
      open: false,
    },
    {
      question: "DAY4: Exciting full-day Disneyland tour",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>
          {" "}
          Catch the front row and watch the parade of all the Disney characters
          dancing in full force to the tune of Disney songs. For some
          adventurous fun, indulge in the joyful rides or go hunting by opting
          for a jungle river cruise.
        </li>,
        <li>Overnight stay.</li>,
      ],
      open: false,
    },
    {
      question: "DAY5: Enjoyable Macau city tour",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>
          {" "}
          The tour takes you to the ancient Ruins of St. Paul’s, an 800 years
          old Chinese temple -- Na Tcha Temple, the historical Old City Walls,
          the peaceful surroundings of the Mount Forte and the oldest temple in
          Macau which is a classical masterpiece dedicated to the sea Goddess,
          Mazu.
        </li>,
        <li>Overnight stay.</li>,
      ],
      open: false,
    },
    {
      question: "DAY6: DEPARTURE",
      answer: [
        <li>Time to head back home with a plethora of memories.</li>,
        <li>Transfer to the airport and depart with fond memories.</li>,
      ],
      open: false,
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = (index) => {
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

  return (
    <div>
      <ImageTextComponent />
      {/* <Hongkongflip /> */}

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      <Last />
    </div>
  );
};
export default Hongkong;
