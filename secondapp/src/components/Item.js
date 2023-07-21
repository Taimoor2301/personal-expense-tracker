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
        <b>Price </b> :{props.data.price} Rs
      </div>
      <button
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
