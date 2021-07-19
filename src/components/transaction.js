import React, { useContext } from "react";
import {GlobalContext} from '../context/GlobalContext.js'


  export const Transaction =({transaction})=> {
    const { remove } = useContext(GlobalContext); //destructure props form the context
  return (
    <>
    <div style={{display:"flex"}}>
    <p style={{margin: "10px"}}>{transaction.text}</p>
    <p style={{margin: "10px", color:transaction.amount>0 ? "green":"red"}}>{transaction.amount}</p>
    <button onClick={()=>remove(transaction.id)}>Remove</button>
    </div>
    <div>
    </div>
    </>
  );
}
