import React, { useState } from 'react';
import './FlipCard.css'; // Import the CSS file

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h3 className="card-title">PRICE DETAILS</h3>
          <p className="card-text"> </p>
        </div>
        <div className="card-back">
          <h3 className="card-title">hiiii</h3>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;