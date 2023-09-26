import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import StickyNavbar from "../components/StickyNavbar";
// import "./App.css";
import FAQ from "../components/FAQ";
import ImageTextComponent from "../components/ImageTextComponent";
// import TravelForm from "../components/TravelForm";
import TravelBookingForm from "../components/TravelBookingForm";
import Last from "../components/Last";

const App = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "DAY 1: SRINAGAR",
      answer: [
        <li>Arrive at Srinagar Airport and transfer to hotel.</li>,
        <li>Dinner at hotel.</li>,
        <li>Overnight at Hotel in Srinagar.</li>,
      ],
      open: true,
    },
    {
      question: "DAY2: SRINAGAR-GULMARG-SRINAGAR",
      answer: [
        <li>After breakfast proceed to Gulmarg.</li>,
        <li>Lunch at Gulmarg.</li>,
        <li>Evening return back to hotel.</li>,
        <li>Dinner at Hotel.</li>,
        <li>Overnight stay at Srinagar.</li>,
      ],
      open: false,
    },
    {
      question: "DAY3: SRINAGAR-PAHALGAM-SRINAGAR",
      answer: [
        <li>After breakfast transfer to Pahalgam.</li>,
        <li>Embark on an excursion to Chandanwadi.</li>,
        <li>Evening return back to hotel.</li>,
        <li>Dinner at Hotel.</li>,
        <li>Overnight stay at Srinagar.</li>,
      ],
      open: false,
    },
    {
      question: "DAY4: SRINAGAR",
      answer: [
        <li>Breakfast at hotel.</li>,
        <li>Visit Mogul Gardens.</li>,
        <li>Lunch at hotel.</li>,
        <li>Evening Shikara ride at Dal lake.</li>,
        <li>Overnight stay at Srinagar.</li>,
      ],
      open: false,
    },
    {
      question: "DAY5: DEPARTURE",
      answer: [
        <li>After breakfast check out of the hotel.</li>,
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
      <StickyNavbar />
      <ImageSlider />
      <ImageTextComponent />
      {/* <TravelForm /> */}
      <TravelBookingForm/>

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Last />
    </div>
  );
};

export default App;
