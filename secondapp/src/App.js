import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Form from "./components/Form/Form";
import AddButton from "./components/addButton";
import {
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import { db, itemCollection } from "./firebase";

let App = () => {
  let [data, setData] = useState([]);
  // ====================================================================
  async function getCollectedData(transferedData) {
    const newItemRef = await addDoc(itemCollection, transferedData);
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(itemCollection, function (snapshot) {
      const itemsArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(itemsArr);
    });
    return unsubscribe;
  }, []);
  // ----------------------------------------------

  async function deleteItem(id) {
    const docRef = doc(db, "items", id);
    await deleteDoc(docRef);
  }

  async function editItem({ id, title, price, date }) {
    let targetObject = data.filter((obj) => obj.id === id);

    let updatedTargetObject = {
      id: id,
      title: title ? title : targetObject[0].title,
      price: price ? price : targetObject[0].price,
      date: date ? date : targetObject[0].date,
    };

    const docRef = doc(db, "items", id);

    await setDoc(docRef, updatedTargetObject);
  }

  let DataItem = () => {
    return data.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        data={item}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    ));
  };

  const [createItem, setCreateItem] = useState(false);

  function addItem() {
    setCreateItem((prev) => !prev);
  }
  return (
    <div className="container">
      <h1 className="heading">Personal Expense Tracker</h1>
      <div className="containerTop">
        {!createItem ? (
          <AddButton addItem={addItem} />
        ) : (
          <Form
            dataTransferFunction={getCollectedData}
            setCreateItem={setCreateItem}
          />
        )}
      </div>
      <div className="card">
        {data.length > 0 ? <DataItem /> : <b>Fill the Form To Create Item</b>}
      </div>
    </div>
  );
};

export default App;
