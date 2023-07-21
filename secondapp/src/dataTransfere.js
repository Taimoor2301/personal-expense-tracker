import React, { useState } from "react";
import Item from "./components/Item";
import Card from "./components/card";
import Form from "./Form/Form";

let dummyData = [
  // dummy data for first item
  {
    date: "23/1/2000",
    title: "Food",
    amount: 2000,
  },
];

let MainApp = () => {
  let [data, setData] = useState(dummyData); // making variables for new data.
  function getCollectedData(transferedData) {
    // making function that will get data from child.
    let newData = { ...transferedData, id: Math.random().toString() }; //storing new data and give id.
    let updatedNewData = [newData, ...data]; //combining new and old data.
    setData(updatedNewData); // setting up final data.
  }

  return (
    <div>
      <Form dataTransferFunction={getCollectedData} />{" "}
      {/*sending function to child for data*/}
      <Card>
        {data.map((item) => (
          <Item data={item} />
        ))}
      </Card>
    </div>
  );
};

export default MainApp;
