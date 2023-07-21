import React, { useEffect, useState } from "react";
import Item from "./components/Item";
import Form from "./components/Form/Form";

let App = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("oldData")) || []
  );
  function getCollectedData(transferedData) {
    let newData = { ...transferedData, id: Math.random().toString() };
    setData([newData]);
  }

  useEffect(
    function () {
      localStorage.setItem("oldData", JSON.stringify(data));
    },
    [data]
  );

  return (
    <div>
      <Form dataTransferFunction={getCollectedData} />{" "}
      {/*sending function to child for data*/}
      <div className="card">
        {data.map((item) => (
          <Item data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
