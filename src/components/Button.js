import React from "react";

const Button = ({ onClick, name, color, disabled }) => {
  return (
    <button
      style={{ backgroundColor: `${disabled ? "grey" : color}` }}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
