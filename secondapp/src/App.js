import React, { useEffect, useState } from "react";
import Item from "./components/Item";
import Form from "./components/Form/Form";

let App = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("oldData")) || []
  );
  function getCollectedData(transferedData) {
    setData((prev) => [transferedData, ...prev]);
  }

  useEffect(
    function () {
      localStorage.setItem("oldData", JSON.stringify(data));
    },
    [data]
  );

  function clear() {
    localStorage.removeItem("oldData");
    setData([]);
  }

  function deleteItem(id) {
    let newData = data.filter((obj) => obj.id !== id);
    setData(newData);
  }

  return (
    <div>
      <Form dataTransferFunction={getCollectedData} clear={clear} />

      {data && (
        <div className="card">
          {data.map((item) => (
            <Item
              data={item}
              key={item.id}
              id={item.id}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
