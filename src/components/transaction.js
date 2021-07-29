import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext.js";

export const Transaction = ({ transaction }) => {
  const { remove, edit } = useContext(GlobalContext); //destructure props form the context
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);
  const [isEditing, setisEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(transaction.id, text, parseInt(amount));
    setisEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
          <button onClick={handleSubmit}>Submit!</button>
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <p style={{ margin: "10px" }}>{transaction.text}</p>
          <p
            style={{
              margin: "10px",
              color: transaction.amount > 0 ? "green" : "red",
            }}
          >
            {transaction.amount}
          </p>
          <button onClick={() => setisEditing(!isEditing)}>Edit</button>

          <button onClick={() => remove(transaction.id)}>Remove</button>
        </div>
      )}
    </>
  );
};
