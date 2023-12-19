function AcctDetails({ balance, loan, isActive }) {
  return (
    <>
      <h1>💵 💰 useReducer Bank Account 💰 💵</h1>
      <p>Status: {isActive ? "Open" : "Closed"}</p>
      <p>Balance: {isActive ? balance : "-"}</p>
      <p>Loan: {isActive ? loan : "-"}</p>
    </>
  );
}

export default AcctDetails;
