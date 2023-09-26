import React from "react";
import { Link } from "react-router-dom";
import vdoo from '../images/success.mp4'
import "./PaymentSuccess.css"; // Import your CSS file

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <video src={vdoo} className="vvdd" autoPlay />
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <Link to="/home">
        <button className="gooo">go to home</button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
