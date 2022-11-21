import React from "react";
import "./BlueButton.css";
const BlueButton = ({ title }) => {
  return (
    <button class="blueBtn">
      <a href="/">{title}</a>
    </button>
  );
};

export default BlueButton;
