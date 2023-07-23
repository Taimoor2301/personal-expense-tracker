import React, { useEffect, useState } from "react";
import "./App.css";
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

  function editItem({ id, title, price, date }) {
    let targetObject = data.filter((obj) => obj.id === id);

    let updatedTargetObject = {
      id: id,
      title: title ? title : targetObject[0].title,
      price: price ? price : targetObject[0].price,
      date: date ? date : targetObject[0].date,
    };

    setData((prev) =>
      prev.map((item) => {
        return item.id === id ? updatedTargetObject : item;
      })
    );
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
              editItem={editItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
