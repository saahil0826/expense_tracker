import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext.js";

const { v4: uuidv4 } = require("uuid");

export const AddTransaction = () => {
  const { addToDo } = useContext(GlobalContext); //destructure props form the context
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    if (text && text) {
      if (!isNaN(amount)) {
        const newItem = {
          text: text,
          amount: parseInt(amount), //take this as a number
          id: uuidv4()
        };
        addToDo(newItem);

        setText("");
        setAmount("");
      } else {
        alert(`${amount} is not a number`);
      }

    } else {
      alert("enter both values.");
    }
  };
  return (
    <div>
      <h3>Add new Transactions</h3>
      <input
        type="text"
        placeholder="enter name"
        id="text"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter amount"
        id="amount"
        name="amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit!</button>
    </div>
  );
};
