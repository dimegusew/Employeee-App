import React from "react";
import "./EmployeesList.css";
import Button from "./Button.js";

const Employee = ({ el, onClick, showedEmployee, id }) => {
  let style = showedEmployee.id === el.id ? { backgroundColor: "#dfe6e9" } : {};
  let { surname, name, position, phone } = el;

  return (
    <div
      className="employee"
      style={style}
      onClick={el => onClick(el.target.id)}
    >
      <div id={el.id}>
        {surname.length > 15 ? surname.slice(0, 15) : surname}{" "}
      </div>
      <div id={el.id}>{name.length > 10 ? name.slice(0, 10) : name} </div>
      <div id={el.id}>{position} </div>
      <div id={el.id}>{phone} </div>
    </div>
  );
};

const EmployeesList = ({
  Employees,
  onClick,
  MoveToPrevPage,
  MoveToNextPage,
  showedEmployee
}) => {
  return (
    <div className="employees-list">
      {Employees.map(el => (
        <Employee
          el={el}
          key={el.id}
          onClick={onClick}
          id={el.id}
          showedEmployee={showedEmployee}
        />
      ))}
      <div className="pagination">
        <Button
          onClick={MoveToPrevPage}
          name={"Предыдущая страница"}
          color={"#a4b0be"}
        />
        <Button
          onClick={MoveToNextPage}
          name={"Следущая страница "}
          color={"#a4b0be"}
        />
      </div>
    </div>
  );
};

export default EmployeesList;
