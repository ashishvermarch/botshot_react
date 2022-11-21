import React from "react";
import "./KnowledgeCard.css";
const KnowledgeCard = ({ imgUrl, h4Title, paraOfCard }) => {
  return (
    <div class="B-card B-card-1">
      <img src={imgUrl} alt="pictu" />
      <div class="B-card-div">
        <h4>{h4Title}</h4>
        <p>{paraOfCard}</p>
        <div class="blogBtn">
          <button>Read More ></button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
