import React, { useContext } from "react";
import { Transaction } from "./transaction.js";
import {GlobalContext} from '../context/GlobalContext.js'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); //destructure props form the context
  return (
    <div>
      <h3>History</h3>
      {transactions.map(t=>(
        <Transaction key={t.id} transaction={t}/>
      ))}
    </div>
  );
};
