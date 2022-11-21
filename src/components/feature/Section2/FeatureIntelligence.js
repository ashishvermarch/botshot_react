import React from "react";
import Heading from "../../common/Heading/Heading";
import IntelligenceCard from "../../common/IntelligenceCard/IntelligenceCard";
import "./FeatureIntelligence.css";

const FeatureIntelligence = () => {
  const featureData = [
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaiDrivenIcon.ffb080de.png&w=1920&q=75",
      cardH1Title: "Live Agent Transfer hello",
      cardPara:
        "An AI-powered chatbot working 24/7, while allowing your staff to take control of the conversation whenever needed",
    },
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhumanizeGuest.e3909ecd.png&w=1920&q=75",
      cardH1Title: "Humanize Guest Conversation",
      cardPara:
        "Respond to the guests suitably through Freddie by BOTSHOT which is language-intelligent and provide accurate answers to guests through self-learning loop",
    },
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FomniChannel.7478c0e4.png&w=1920&q=75",
      cardH1Title: "Omni Channel Presence",
      cardPara:
        "Engage and interact with guests on the channel of their choice - WhatsApp, Messenger, Viber etc. and provide delightful conversational experiences",
    },
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FconversationFlow.4f447346.png&w=1920&q=75",
      cardH1Title: "Customise your Conversation Flow",
      cardPara:
        "Customise the guest conversation flow by letting your guests connect and interact with Freddie using emotional intelligence",
    },
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfaqsInqueries.e38064d1.png&w=1920&q=75",
      cardH1Title: "FAQs and Enquiries",
      cardPara:
        "Provide instant 24x7 support to your guests by automating the replies to FAQs and general inquires through Freddie by BOTSHOT",
    },
    {
      cardImgUrl:
        "https://botshot.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FemotionalConversation.78d9bfc9.png&w=1920&q=75",
      cardH1Title: "Emotional & Intelligent Conversations",
      cardPara:
        "Revolutionise guest experience by using empathetic AI through Freddie by BOTSHOT for better guest communication",
    },
  ];

  return (
    <>
      <section id="section-2">
        <Heading title={"Features of Conversational Intelligence"} />

        <div class="gridParent">
          {featureData.map((card, idx) => {
            return (
              <div class={`card-${idx}`} key={card.cardH1Title}>
                <IntelligenceCard
                  cardImgUrl={card.cardImgUrl}
                  cardH1Title={card.cardH1Title}
                  cardPara={card.cardPara}
                />
              </div>
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default FeatureIntelligence;
