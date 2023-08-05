import React, { useState } from "react";
import EditForm from "./editpannel/editForm";

let Item = (props) => {
  let getData = (collectedData) => {
    props.editItem(collectedData);
  };

  // ------------------ controling the display of editing pannel-------------
  let [display, setDisplay] = useState("hide");

  let controlDisplay = () => {
    setDisplay("show");
  };

  // ---------------cancel button-------------------
  let abortEditing = () => {
    setDisplay("hide");
    setContent(<Buttons />);
  };
  // ------------------ setting up content for edit pannel-------------------

  let Buttons = () => {
    return (
      <div className="buttons-container">
        <button
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          Delete
        </button>

        <button onClick={changeContent}>Edit</button>
      </div>
    );
  };

  let [content, setContent] = useState(<Buttons />);

  function changeContent() {
    setContent(
      <EditForm abortEditing={abortEditing} id={props.id} getData={getData} />
    );
  }
  // -------------------------------------------------------------------------------------
  return (
    <div className="item-container" onClick={controlDisplay}>
      <div className="item">
        <h2 className="title">{props.data.title}</h2>

        <div className="amount">Price :{props.data.price} Rs</div>
        <div className="date">Date :{props.data.date}</div>
      </div>
      {/* --------------buttons here----------- */}

      <div className={display}>{content}</div>
    </div>
  );
};

export default Item;
