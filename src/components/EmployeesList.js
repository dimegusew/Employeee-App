import React from "react";
import "./EmployeesList.css";
import Button from "./Button.js";

const Employee = ({...props}) => {
  let { surname, name, position, phone,id } = props.el;
  let style = props.showedEmployee.id === id ? { backgroundColor: "#dfe6e9" } : {};

  return (
    <div
      className="employee"
      style={style}
      onClick={el => props.onClick(el.target.id)}
    >
      <div id={id}>
        {surname.length > 15 ? surname.slice(0, 15) : surname}{" "}
      </div>
      <div id={id}>{name.length > 10 ? name.slice(0, 10) : name} </div>
      <div id={id}>{position} </div>
      <div id={id}>{phone} </div>
    </div>
  );
};

const EmployeesList = ({...props}) => {
  return (
    <div className="employees-list">
      {props.PageOfEmployees.map(el => (
        <Employee
          el={el}
          key={el.id}
          {...props}
        />
      ))}
      <div className="pagination">
        <Button
          onClick={props.MoveToPrevPage}
          name={"Предыдущая страница"}
          color={"#a4b0be"}
        />
        <Button
          onClick={props.MoveToNextPage}
          name={"Следущая страница "}
          color={"#a4b0be"}
        />
      </div>
    </div>
  );
};

export default EmployeesList;
