import { useState } from "react";

function DepositAndWithDraw({ isActive, balance, maxBalance, dispatch }) {
  const [depositAmount, setDepositAmount] = useState(50);
  const [withdrawAmount, setWithdrawAmount] = useState(50);
  return (
    <div>
      <p>
        <input
          type="number"
          value={depositAmount}
          onChange={(E) => setDepositAmount(Number(E.target.value))}
        />{" "}
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: depositAmount });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
      </p>
      <p>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(E) => setWithdrawAmount(Number(E.target.value))}
        />{" "}
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: withdrawAmount });
          }}
          disabled={!isActive}
        >
          Withdraw
        </button>
      </p>
    </div>
  );
}

export default DepositAndWithDraw;
