import "./style.css";
const ImageCard = ({ imgSrc, boxShadow, alternative }) => {
  return (
    <div class={`cardSec-4 sec4-card1 ${boxShadow ? "lowerCards" : ""}`}>
      <img src={imgSrc} alt={alternative} />
    </div>
  );
};

export default ImageCard;
