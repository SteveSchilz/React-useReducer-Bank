function CloseAccount({ balance, loan, isActive, dispatch }) {
  return (
    <>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "close" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </>
  );
}

export default CloseAccount;
