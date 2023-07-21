import "./card.css";

let Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
