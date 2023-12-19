function DepositAndWithDraw({ isActive, balance, maxBalance, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => {
            balance < maxBalance
              ? dispatch({ type: "deposit" })
              : alert(
                  `FDIC Insured accounts are limited to a max of: ${maxBalance}`
                );
          }}
          disabled={!isActive}
        >
          Deposit 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            balance >= 50
              ? dispatch({ type: "withdraw" })
              : alert("Insufficient funds to widthraw!");
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
    </div>
  );
}

export default DepositAndWithDraw;
