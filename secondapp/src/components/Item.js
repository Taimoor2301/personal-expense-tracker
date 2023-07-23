import React, { useState } from "react";

let Item = (props) => {
  let [editPannel, setEditPannel] = useState("edit-pannel");
  let [isVislible, setIsVisible] = useState(false);
  function showEditPannel() {
    if (!isVislible) {
      setEditPannel("edit-pannel showEditPannel");
      setIsVisible((prev) => !prev);
    } else {
      setEditPannel("edit-pannel");
      setIsVisible((prev) => !prev);
    }
  }

  let objTemplate = {
    id: props.id,
    title: "",
    price: "",
    date: "",
  };

  let [updatedItem, setUpdatedItem] = useState(objTemplate);

  function setUpdatedData(e) {
    setUpdatedItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function passCollectedData(event) {
    event.preventDefault();
    props.editItem(updatedItem);
    setUpdatedItem(objTemplate);
    setEditPannel("edit-pannel");
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="item-container">
      <div className="item">
        <div className="date_title">
          <div className="date">
            Date : <span>{props.data.date}</span>
          </div>
          <h2>{props.data.title}</h2>
        </div>

        <div className="amount">
          <b>Price :{props.data.price} Rs</b>
        </div>
        <div className="buttons-container">
          <button
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            Delete
          </button>

          <button onClick={showEditPannel}>Edit</button>
        </div>
      </div>
      <form className={editPannel} onSubmit={passCollectedData}>
        <input
          type="text"
          placeholder="New Title"
          name="title"
          onChange={setUpdatedData}
          value={updatedItem.title}
        ></input>
        <input
          type="text"
          name="price"
          placeholder="New Ammount"
          onChange={setUpdatedData}
          value={updatedItem.price}
        ></input>
        <input
          type="date"
          name="date"
          placeholder="New Date"
          onChange={setUpdatedData}
          value={updatedItem.date}
        ></input>
        <button>Set</button>
      </form>
    </div>
  );
};

export default Item;
