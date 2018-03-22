import React from "react";
import "./EmployeeListHeader.css";

const SortParam = ({ onClick, type, sortDirection, name }) => {
  return (
    <div className="sort" id={type} onClick={onClick}>
      {name}
      {!sortDirection ? "▲" : "▼"}
    </div>
  );
};

const EmployeesListHeader = ({ onClick, sortDirection }) => {
  return (
    <div className="employee-header">
      <SortParam
        type="Surname"
        onClick={onClick}
        name={"Фамилия"}
        sortDirection={sortDirection.Surname}
      />
      <SortParam
        type="Name"
        name={"Имя"}
        onClick={onClick}
        sortDirection={sortDirection.Name}
      />
      <SortParam
        type="Position"
        name={"Должность"}
        onClick={onClick}
        sortDirection={sortDirection.Position}
      />
      <div>Телефон</div>
    </div>
  );
};

export default EmployeesListHeader;
