import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 class="h1-heading">{title}</h1>
    </div>
  );
};

export default Heading;
