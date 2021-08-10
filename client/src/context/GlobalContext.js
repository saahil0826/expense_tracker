import React, { useReducer, createContext } from "react";
const { v4: uuidv4 } = require("uuid");

const transactions = [
  { id: uuidv4(), text: "Camera", amount: -60 },
  { id: uuidv4(), text: "Food", amount: -10 },
  { id: uuidv4(), text: "Compensation", amount: 100 },
  { id: uuidv4(), text: "Athletic monthly", amount: -5 },
  { id: uuidv4(), text: "call options monthly", amount: 20 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT":
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.text,
              amount: action.payload.amount,
            }
          : item
      );

    default:
      return state;
  }
};

//create Context
export const GlobalContext = createContext(transactions); //1 make the context

//create Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, transactions);

  //Actions
  const addToDo = (newItem) => {
    dispatch({ type: "ADD", payload: newItem });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const edit = (id, text, amount) => {
    if (!isNaN(amount)) {
      dispatch({ type: "EDIT", payload: { id, text, amount } }); //multiple payloads
    } else {
      alert(`${amount} is not a number`);
    }
  };

  return (
    //pass down the state from the Reducer not the initialState
    <GlobalContext.Provider
      value={{ transactions: state, remove, addToDo, edit }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
