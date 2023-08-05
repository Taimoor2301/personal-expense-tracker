import AddButton from "../addButton";
import { useState } from "react";

let Form = (props) => {
  const obj = {
    title: "",
    price: "",
    date: "",
  };
  let [formData, setFormData] = useState(obj);

  let handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.title != "" && formData.price != "") {
      props.dataTransferFunction(formData);
      props.setCreateItem();
      setFormData(obj);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Input Info</h1>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        name="title"
        onChange={handleChange}
      ></input>

      <input
        type="text"
        placeholder="Price"
        value={formData.price}
        name="price"
        onChange={handleChange}
      ></input>

      <input
        type="date"
        placeholder="Date"
        value={formData.date}
        name="date"
        onChange={handleChange}
      ></input>
      <div className="buttons-container">
        <button>Create</button>
        <button
          onClick={() => {
            props.setCreateItem();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
