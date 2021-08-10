import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext.js";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "15px" }}>
        <h4>Income</h4>
        <p style={{ color: "green" }}>{income}</p>
      </div>
      <div style={{ padding: "15px" }}>
        <h4>Expense</h4>
        <p style={{ color: "red" }}>{expense}</p>
      </div>
    </div>
  );
};
