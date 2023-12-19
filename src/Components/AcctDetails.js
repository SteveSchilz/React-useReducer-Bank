function AcctDetails({ balance, loan, isActive }) {
  return (
    <>
      <h1>💵 💰 Simple Bank Account 💰 💵</h1>
      <p>Status: {isActive ? "Open" : "Closed"}</p>
      <p>Balance: {isActive ? balance : "-"}</p>
      <p>Loan: {isActive ? loan : "-"}</p>
      <p>(Demonstrates useReducer in React)</p>
    </>
  );
}

export default AcctDetails;
