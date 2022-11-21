import React from "react";
import Heading from "../../common/Heading/Heading";
import KnowledgeCard from "../../common/KnowledgeCard/KnowledgeCard";
import "./KnowledgeCenter.css";
const KnowledgeCenter = () => {
  const knowledgeCardData = [
    {
      imgUrl:
        "https://d28fok4odypdh0.cloudfront.net/cl88q8ulq001r0k33dte2gaih.webp",
      h4Title: "Chatbot for Hospitality Industry",
      paraOfCard:
        "If you’re in the hospitality industry, you must use chatbot to reduce cost, improve guest experience and guest service using AI-powered chatbot.",
    },
    {
      imgUrl:
        "https://d28fok4odypdh0.cloudfront.net/cl8ycth5700010jzlau99d7vu.webp",
      h4Title: "7 Hotel Renovation Ideas that will WOW Your Guests",
      paraOfCard:
        "If you’re the owner of a hotel, you must check out the 7 hotel renovation ideas that will definitely WOW your guests and improve the experience.",
    },
    {
      imgUrl:
        "https://d28fok4odypdh0.cloudfront.net/cl8u7ic4v00050k507za711uc.webp",
      h4Title: "WhatsApp Business Solution for Hotels",
      paraOfCard:
        "Hotels should use WhatsApp Business Solution to stay in touch with guests who may need help or assistance while they’re staying at the hotel.",
    },
  ];

  return (
    <section id="section-5">
      <Heading title="Knowledge center" />
      <div class="smallMenu">
        <div>Blogs</div>
        <div>Trending News</div>
      </div>
      <div class="blogsCards">
        {knowledgeCardData.map((card) => {
          return (
            <KnowledgeCard
              imgUrl={card.imgUrl}
              h4Title={card.h4Title}
              paraOfCard={card.paraOfCard}
            />
          );
        })}
      </div>
      <div class="centerBtn">
        <button id="lastBtn">View All</button>
      </div>
    </section>
  );
};

export default KnowledgeCenter;
