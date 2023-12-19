import { useReducer } from "react";

import "../styles.css";
import AcctDetails from "./AcctDetails.js";
import CloseAccount from "./CloseAccount.js";
import DepositAndWithDraw from "./DepositAndWithDraw.js";
import TogglePanel from "./TogglePanel.js";
import LoansAndPayments from "./LoansAndPayments.js";

const MAX_FUNDS = 600; //100000;
const LOAN_AMOUNT = 1000;

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      console.log("open");
      return { ...state, balance: 500, isActive: true };
    case "close":
      if (state.balance !== 0) {
        alert("Must have zero balance to close!");
        return state;
      }
      if (state.loan !== 0) {
        alert("Must have zero loan balance to close!");
        return state;
      }
      console.log("close");
      return { ...state, isActive: false };
    case "deposit":
      return { ...state, balance: state.balance + 50 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "loan":
      if (state.loan === 0) {
        return {
          ...state,
          balance: state.balance + LOAN_AMOUNT,
          loan: LOAN_AMOUNT,
        };
      } else {
        alert("Only one loan is allowed at a time !");
        return state;
      }
    case "payloan":
      if (state.loan > 0) {
        return { ...state, loan: state.loan - LOAN_AMOUNT };
      } else {
        alert("No loan balance to repay!");
        return state;
      }
    case "":
      return { ...state };
    default:
      throw new Error("Unknown Action: " + action.type);
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <AcctDetails balance={balance} loan={loan} isActive={isActive} />
      <TogglePanel isActive={!isActive}>
        <p>
          <button
            className="button"
            onClick={() => dispatch({ type: "open" })}
            disabled={isActive}
          >
            Open account
          </button>
        </p>
      </TogglePanel>
      <TogglePanel isActive={isActive}>
        <DepositAndWithDraw
          isActive={isActive}
          balance={balance}
          maxBalance={MAX_FUNDS}
          dispatch={dispatch}
        />
        <LoansAndPayments
          isActive={isActive}
          loanAmount={LOAN_AMOUNT}
          dispatch={dispatch}
        />
        <CloseAccount
          balance={balance}
          loan={loan}
          isActive={isActive}
          dispatch={dispatch}
        />
      </TogglePanel>
    </div>
  );
}
