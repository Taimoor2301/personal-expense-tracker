import { useState } from "react";

let Form = (props) => {
  const obj = {
    title: "",
    price: "",
    date: "",
    id: "",
  };
  let [formData, setFormData] = useState(obj);
  let [redTitle, setRedTitle] = useState("");
  let [redPrice, setRedPrice] = useState("");

  let handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.title != "" && formData.price != "") {
      formData.id = Math.floor(Math.random() * 1000);
      props.dataTransferFunction(formData);
      setFormData(obj);
      setRedPrice("");
      setRedTitle("");
    } else if (formData.title === "") {
      setRedTitle("danger");
    } else if (formData.price === "") {
      setRedPrice("danger");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Input Info</h1>
      <input
        className={redTitle}
        type="text"
        placeholder="Title"
        value={formData.title}
        name="title"
        onChange={handleChange}
      ></input>

      <input
        type="text"
        className={redPrice}
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
      <div>
        <button>Create</button>
        <button onClick={props.clear}>Clear All</button>
      </div>
    </form>
  );
};

export default Form;
