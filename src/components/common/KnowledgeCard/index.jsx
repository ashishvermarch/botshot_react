import "./style.css";
const KnowledgeCard = ({ imgUrl, h4Title, paraOfCard, alternative }) => {
  return (
    <div class="Blog-card Blog-card-1">
      <img src={imgUrl} alt={alternative} />
      <div class="Blog-card-div">
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
