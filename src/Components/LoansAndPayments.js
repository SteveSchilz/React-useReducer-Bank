function LoansAndPayments({ isActive, loanAmount, dispatch }) {
  return (
    <>
      {" "}
      <p>
        <button
          onClick={() => {
            console.log("loan: " + loanAmount);
            dispatch({ type: "loan" });
          }}
          disabled={!isActive}
        >
          Request a loan of {loanAmount}
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            console.log("Pay loan: " + loanAmount);
            dispatch({ type: "payloan" });
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
