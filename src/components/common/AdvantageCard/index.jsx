import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import "./styles.css";

const Card = ({ heading, description, buttonLabel, imgSrc, isRow }) => {
  return (
    <div className={isRow ? "mainWrapper" : "mainWrapperReverse"}>
      <div className="textAndButton">
        <div className="head">{heading}</div>
        <div className="desc">{description}</div>
        <BlueButton title={buttonLabel} />
      </div>
      <div className="image">
        <img src={imgSrc} alt="/" />
      </div>
    </div>
  );
};

export default Card;
