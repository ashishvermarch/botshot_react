import React from "react";
import "./ImageCard.css";
const ImageCard = ({ imgSrc, boxShdw }) => {
  return (
    <div class={`cardSec-4 sec4-card1 ${boxShdw ? "lowerCards" : ""}`}>
      <img src={imgSrc} alt="pictu" />
    </div>
  );
};

export default ImageCard;
