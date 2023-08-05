import { useState } from "react";

export default function EditForm(props) {
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

  //  submit  data to item

  let sendData = (e) => {
    e.preventDefault();
    props.getData(updatedItem);
    setUpdatedItem(objTemplate);
    props.abortEditing();
  };
  // -------------------------------------

  return (
    <form className="edit-pannel" onSubmit={sendData}>
      <input
        type="text"
        placeholder="New Title"
        name="title"
        onChange={setUpdatedData}
        value={updatedItem.title}
      ></input>
      <input
        type="number"
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
      <div className="buttons-container">
        <button type="submit">Set</button>
        <button type="button" onClick={props.abortEditing}>
          Cancel
        </button>
      </div>
    </form>
  );
}
