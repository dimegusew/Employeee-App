import React from "react";
import Button from "./Button.js";
import "./Header.css";

const Header = ({ onCreateClick }) => {
  return (
    <div className="header">
      <Button
        onClick={onCreateClick}
        name={"Добавить нового работника"}
        color={"#0984e3"}
      />
    </div>
  );
};

export default Header;
