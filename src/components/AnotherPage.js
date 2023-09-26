import React from "react";
import { useParams, Link } from "react-router-dom";
import "./AnotherPage.css";

const AnotherPage = () => {
  const { name, email, destination, noOfPersons } = useParams();
  const Gross = 5000;
  const Net = Gross * parseInt(noOfPersons);
  return (
    <div id="anpg-all">
      <div id="anpg-details">
        <h2 id="tbp">Trip And Payment details</h2>
        <br />
        <br />
        <p className="apdes">Name: <label className="payname"> {name}</label></p>
        <br />
        <p className="apdes">Email: <label className="payemail"> {email}</label></p>
        <br />
        <p className="apdes">Destination: <label className="paydes"> {destination}</label></p>
        <br />
        <p className="apdes">
          Price: <span className="otherdetspan">&nbsp;&nbsp;{Gross}</span>
        </p>
        <br />
        <p className="apdes">
          No of persons: <span id="nopspan">{noOfPersons}</span>
        </p>
        <p className="totdash">-----------</p>
        <p className="apdes">
          Total: 
          <span className="otherdetspan">{Net}</span>
        </p>
        <p className="totdash">-----------</p>
        <br />
        <br />
        <Link to={`/paymentPage/${Net}`}>
          <button id="pnbtn"> Pay Now</button>
        </Link>
      </div>
    </div>
  );
};

export default AnotherPage;
