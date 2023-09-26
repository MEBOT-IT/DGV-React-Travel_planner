import React, { useState } from "react";
import ImageTextComponent from "./ImageTextComponent";
// import Darjeelingflip from "./Darjeelingflip";
import FAQ from "./FAQ";
import Last from "./Last";

const Dareeling = () => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "DAY 1: Arrival in Gangtok | Welcome to the Capital City of Sikkim",
      answer: [
        <li>Arrive at Bagdogra Airport and transfer to hotel.</li>,
        <li>Dinner at hotel.</li>,
        <li>Overnight at Hotel in GOA.</li>,
      ],
      open: true,
    },
    {
      question: "DAY2: Gangtok Tour | Visit the Famous Tsomgo Lake ",
      answer: [
        <li>After breakfast proceed to Beach.</li>,
        <li>Visit to the Famous Tsomgo lake aka changu lake</li>,
        <li>Lunch at Baba mandir temple.</li>,
        <li>Evening return back to hotel.</li>,
        <li>Dinner at beach restarunt.</li>,
        <li>Overnight stay at Gangtok.</li>,
      ],
      open: false,
    },

    {
      question:
        "DAY3: Gangtok To Pelling Via Ravangla | Marvel at Mt. Kanchenjunga",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>Moving to Pelling.</li>,
        <li>Visit to Buddha Park</li>,
        <li>Lunch at Pelling.</li>,
        <li>Overnight stay at Pelling.</li>,
      ],
      open: false,
    },

    {
      question: "DAY4: Pelling City Tour | Visit Sacred Khecheopalri Lake",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>Moving to Pelling Khecheopalri Lake.</li>,
        <li>Visit to Rimbi waterfalls</li>,
        <li>Lunch at Darap valley.</li>,
        <li>Overnight stay at Pelling city.</li>,
      ],
      open: false,
    },
    {
      question:
        "DAY5: Pelling to Darjeeling | Admire The Scenic Views Of Himalayas",
      answer: [
        <li>Take you to Darjeeling.</li>,
        <li>Pass through the scenic landscapes</li>,
        <li>Bustling Mall Riad and shoping time</li>,
      ],
      open: false,
    },

    {
      question: "DAY6:DEPARTURE",
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
      {/* <Darjeelingflip /> */}

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      <Last />
    </div>
  );
};
export default Dareeling;
