function TogglePanel({ isActive, children }) {
  return <div>{isActive && children}</div>;
}

export default TogglePanel;
