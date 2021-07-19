import { Balance } from "./components/balance.js";
import { IncomeExpenses } from "./components/incomeExpenses.js";
import { TransactionList } from "./components/transactionList.js";
import { AddTransaction } from "./components/addTransaction.js";
import { GlobalProvider } from "./context/GlobalContext.js";

function App() {
  return (
    <GlobalProvider>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
