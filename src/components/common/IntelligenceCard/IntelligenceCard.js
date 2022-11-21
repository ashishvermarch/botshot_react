import React from "react";
import "./IntelligenceCard.css";

const IntelligenceCard = ({ cardImgUrl, cardH1Title, cardPara }) => {
  return (
    <>
      <div class="card">
        <div>
          <img src={cardImgUrl} alt="pic1" />
          <h1>{cardH1Title}</h1>
        </div>
        <div>
          <p>{cardPara}</p>
        </div>
      </div>
    </>
  );
};

export default IntelligenceCard;
