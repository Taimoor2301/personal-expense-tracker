let AddButton = (props) => {
  return (
    <button onClick={() => props.addItem()} className="newBtn">
      Add New Item
    </button>
  );
};

export default AddButton;
