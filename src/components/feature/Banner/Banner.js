import React from "react";
import YellowButton from "../../common/YellowButton/YellowButton";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="section-1">
      <div id="frontWall">
        <div class="wallOptional-1" id="frontWall_part2">
          <img
            id="imgConnect"
            src="https://d28fok4odypdh0.cloudfront.net/cl88ny2jw000b0k33bdpxfgq2.webp"
            alt="connect"
          />
        </div>
        <div id="frontWall_part1">
          <h2>Leverage Conversational Intelligence with NLP chatbots</h2>
          <h4>
            Simplify the direct communication between staff and guests through
            NLP-powered interactions giving on-demand information in a natural
            and conversational way
          </h4>
          <YellowButton />
        </div>
        <div class="wallOptional-2" id="frontWall_part2">
          <img
            id="imgConnect"
            src="https://d28fok4odypdh0.cloudfront.net/cl88ny2jw000b0k33bdpxfgq2.webp"
            alt="connect"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
