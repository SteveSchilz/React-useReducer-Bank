function OpenAccount({ isActive, dispatch }) {
  return (
    <p>
      <button
        className="button"
        onClick={() => dispatch({ type: "open" })}
        disabled={isActive}
      >
        Open account
      </button>
    </p>
  );
}

export default OpenAccount;
