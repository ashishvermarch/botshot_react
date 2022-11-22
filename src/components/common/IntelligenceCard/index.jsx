import "./style.css";

const IntelligenceCard = ({
  cardImgUrl,
  cardH1Title,
  cardPara,
  alternative,
}) => {
  return (
    <div class="card">
      <div>
        <img src={cardImgUrl} alt={alternative} />
        <h1>{cardH1Title}</h1>
      </div>
      <div>
        <p>{cardPara}</p>
      </div>
    </div>
  );
};

export default IntelligenceCard;
