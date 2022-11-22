import React from "react";
import YellowButton from "../../common/YellowButton";
import "./Header.css";

const Header = () => {
  return (
    <div class="header">
      <a href="/">
        <img
          src="https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbotshotWhiteLogo.883763b6.png&w=128&q=75"
          alt="botshot logo"
        />
      </a>
      <div class="menu">
        <ul>
          <a href="/">
            <li>Products</li>
          </a>
          <a href="/">
            <li>Platform</li>
          </a>
          <a href="/">
            <li>Industries</li>
          </a>
          <a href="/">
            <li>Resources</li>
          </a>
          <a href="/">
            <li>Pricing</li>
          </a>
        </ul>
      </div>
      <YellowButton />
    </div>
  );
};

export default Header;
