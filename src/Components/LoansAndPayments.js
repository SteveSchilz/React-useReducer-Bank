import { useState } from "react";

const DEFAULT_LOAN = 500;

function LoansAndPayments({ isActive, dispatch }) {
  const [loanRequest, setLoanRequest] = useState(DEFAULT_LOAN);
  const [loanPayment, setLoanPayment] = useState(DEFAULT_LOAN / 10);
  return (
    <>
      {" "}
      <p>
        <input
          type="number"
          value={loanRequest}
          onChange={(E) => setLoanRequest(Number(E.target.value))}
        />{" "}
        <button
          onClick={() => {
            console.log("loan: " + loanRequest);
            dispatch({ type: "loan", payload: loanRequest });
            setLoanPayment(() => loanRequest / 10);
          }}
          disabled={!isActive}
        >
          Request Loan
        </button>
      </p>
      <p>
        <input
          type="number"
          value={loanPayment}
          onChange={(E) => setLoanPayment(Number(E.target.value))}
        />{" "}
        <button
          onClick={() => {
            console.log("Pay loan: " + loanPayment);
            dispatch({ type: "payloan", payload: loanPayment });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
    </>
  );
}

export default LoansAndPayments;
