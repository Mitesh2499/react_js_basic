import React from "react";

function MinusButton({ disabled, onButtonClick }) {
  return (
    <button disabled={disabled} onClick={() => onButtonClick(false)}>
      -
    </button>
  );
}

export default MinusButton;
