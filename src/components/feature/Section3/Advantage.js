import Card from "../../common/AdvantageCard";
import Heading from "../../common/Heading/Heading";

const cardData = [
  {
    heading: "Active Learning",
    description:
      "With active learning, Freddie by BOTSHOT can use past data to understand the personality and context of the conversation to improve suggestions",
    buttonLabel: "Improve Predictions",
    imgSrc: "https://botshot.ai/_next/static/media/betterInsight.80922e8b.png",
  },
  {
    heading: "Speak in Guests' Language",
    description:
      " Freddie by BOTSHOT can train itself in 100+ languages to understand and respond to guest queries better",
    buttonLabel: "Be Multi Lingual",
    imgSrc: "https://botshot.ai/_next/static/media/reduceCost.7b1adbaf.png",
  },
  {
    heading: "Reduce Cost",
    description:
      " Reduce manual workflow and repetitive tasks by integrating intelligent bots which increase your productivity and reduce cost",
    buttonLabel: "Improve Profitability",
    imgSrc: "https://botshot.ai/_next/static/media/ciReducedCost.a5df14df.png",
  },
  {
    heading: "Real-time Availability during Non-Business Hours",
    description:
      "Freddie by BOTSHOT can train itself in 100+ languages to understand and respond to guest queries better",
    buttonLabel: "24-Hour Support",
    imgSrc:
      "https://botshot.ai/_next/static/media/realTimeAvailability.78242367.png",
  },
];

const Advantage = () => {
  return (
    <>
      <section id="section-3">
        <div>
          <Heading title={"Advantage"} />
        </div>
        {cardData.map(({ heading, description, buttonLabel, imgSrc }, idx) => {
          return (
            <Card
              heading={heading}
              description={description}
              buttonLabel={buttonLabel}
              imgSrc={imgSrc}
              isRow={idx % 2 === 0}
            />
          );
        })}
      </section>
    </>
  );
};

export default Advantage;
