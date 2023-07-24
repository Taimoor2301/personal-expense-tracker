import React, { useState } from "react";
import EditForm from "./editpannel/editForm";

let Item = (props) => {
  // let [editPannel, setEditPannel] = useState("edit-pannel");
  // let [isVislible, setIsVisible] = useState(false);
  // function showEditPannel() {
  //   if (!isVislible) {
  //     setEditPannel("edit-pannel showEditPannel");
  //     setIsVisible((prev) => !prev);
  //   } else {
  //     setEditPannel("edit-pannel");
  //     setIsVisible((prev) => !prev);
  //   }
  // }

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
    <div className="item-container">
      <div className="item" onClick={controlDisplay}>
        <h2 className="title">{props.data.title}</h2>

        <div className="amount">
          <b>Price :{props.data.price} Rs</b>
        </div>
        <div className="date">
          Date : <span>{props.data.date}</span>
        </div>
      </div>
      {/* --------------buttons here----------- */}

      <div className={display}>{content}</div>
    </div>
  );
};

export default Item;

{
  /* <div className="buttons-container">
        <button
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          Delete
        </button>

        <button onClick={showEditPannel}>Edit</button>
      </div>
      
      <EditForm editPannel={editPannel} id={props.id} getData={getData} /> */
}
