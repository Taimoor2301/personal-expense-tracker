import "./Form.css";
import { useState } from "react";

let Form = (props) => {
  // making variables to store input data
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  //   functions that assign input values to created variales

  let titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  let amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  let dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  //    function that stops reloading of page and store collected data into an object

  let submitHandler = (event) => {
    event.preventDefault();

    const collectedData = {
      title: enterTitle,
      amount: enterAmount,
      date: enterDate,
    };

    // checking if any of collected data is empty

    if (
      collectedData.title != "" &&
      collectedData.amount != "" &&
      collectedData.date != ""
    ) {
      props.dataTransferFunction(collectedData); // transfer collected data to parent
    }

    setEnterTitle(""); // setting input fields back to empty.
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>Input Info</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={titleChangeHandler} // change events that track changes
      ></input>
      <input
        type="text"
        placeholder="Amount"
        onChange={amountChangeHandler}
      ></input>
      <input
        type="date"
        placeholder="Date"
        onChange={dateChangeHandler}
      ></input>
      <button>Create</button>
    </form>
  );
};

export default Form;
