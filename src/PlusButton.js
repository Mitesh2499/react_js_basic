function PlusButton({ disabled, onButtonClick }) {
  return (
    <button disabled={disabled} onClick={() => onButtonClick(true)}>
      +
    </button>
  );
}

export default PlusButton;
