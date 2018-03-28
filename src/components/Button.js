import React from "react";

const Button = ({...props }) => {
  return (
    <button
      style={{ backgroundColor: `${props.disabled ? "grey" : props.color}` }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
