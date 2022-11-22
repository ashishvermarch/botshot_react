import BlueButton from "../BlueButton/index";
import "./styles.css";

const Card = ({
  heading,
  description,
  buttonLabel,
  imgSrc,
  isRow,
  alternative,
}) => {
  return (
    <div className={isRow ? "mainWrapper" : "mainWrapperReverse"}>
      <div className="textAndButton">
        <div className="head">{heading}</div>
        <div className="desc">{description}</div>
        <BlueButton title={buttonLabel} />
      </div>
      <div className="image">
        <img src={imgSrc} alt={alternative} />
      </div>
    </div>
  );
};

export default Card;
