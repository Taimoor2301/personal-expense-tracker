import React from "react";
import "./Item.css";

let Item = (props) => {
  return (
    <div className="item">
      <div className="date_title">
        <div className="date">
          Date : <span>{props.data.date}</span>
        </div>
        <h2>{props.data.title}</h2>
      </div>

      <div className="amount">
        <b>Amount </b> : ${props.data.amount}
      </div>
    </div>
  );
};

export default Item;
