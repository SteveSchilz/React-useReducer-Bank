import { useReducer } from "react";

import "../styles.css";
import AcctDetails from "./AcctDetails.js";
import OpenAccount from "./OpenAccount.js";
import CloseAccount from "./CloseAccount.js";
import DepositAndWithDraw from "./DepositAndWithDraw.js";
import TogglePanel from "./TogglePanel.js";
import LoansAndPayments from "./LoansAndPayments.js";

const MAX_FUNDS = 600; //100000;
const MAX_LOAN = 2000;

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  // Short circuit everything but open if account is not open
  if (!state.isActive && action.type !== "open") return state;

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
      if (state.balance + action.payload > MAX_FUNDS) {
        alert(`FDIC Insured accounts are limited to a max of: ${MAX_FUNDS}`);
        return state;
      } else {
        return { ...state, balance: state.balance + action.payload };
      }
    case "withdraw":
      if (state.balance < action.payload) {
        alert(
          `Balance of ${state.balance} is insufficient to widthraw ${action.payload}!`
        );
        return state;
      } else {
        return { ...state, balance: state.balance - action.payload };
      }
    case "loan":
      if (action.payload > MAX_LOAN) {
        alert(
          `Loan Request for ${action.payload} is > max allowed (${MAX_LOAN}): DENIED`
        );
        return state;
      }
      if (state.loan === 0) {
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: action.payload,
        };
      } else {
        alert("Only one loan is allowed at a time !");
        return state;
      }
    case "payloan":
      if (state.loan >= action.payload) {
        return { ...state, loan: state.loan - action.payload };
      } else {
        alert(
          `Attempt to pay ${action.payload} on a balance of ${state.loan} is Invalid!`
        );
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
        <OpenAccount isActive={isActive} dispatch={dispatch} />
      </TogglePanel>
      <TogglePanel isActive={isActive}>
        <DepositAndWithDraw
          isActive={isActive}
          balance={balance}
          maxBalance={MAX_FUNDS}
          dispatch={dispatch}
        />
        <LoansAndPayments isActive={isActive} dispatch={dispatch} />
        <CloseAccount
          balance={balance}
          loan={loan}
          isActive={isActive && balance === 0}
          dispatch={dispatch}
        />
      </TogglePanel>
    </div>
  );
}
