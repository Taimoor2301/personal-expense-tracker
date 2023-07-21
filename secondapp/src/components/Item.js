import React from "react";
import "./Item.css";

let Item = (props) => {
  console.log(props.id);
  return (
    <div className="item">
      <div className="date_title">
        <div className="date">
          Date : <span>{props.data.date}</span>
        </div>
        <h2>{props.data.title}</h2>
      </div>
      <div className="amount">
        <b>Price </b> :{props.data.price} Rs
      </div>
    </div>
  );
};

export default Item;
