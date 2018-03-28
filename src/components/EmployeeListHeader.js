import React from "react";
import "./EmployeeListHeader.css";

const SortParam = ({...props }) => {
  return (
    <div className="sort" id={props.type} onClick={props.onClick}>
      {props.name}
      {!props.isReverseSort ? "▲" : "▼"}
    </div>
  );
};

const EmployeesListHeader = ({ onClick, isReverseSort }) => {
  return (
    <div className="employee-header">
      <SortParam
        type="Surname"
        onClick={onClick}
        name={"Фамилия"}
        isReverseSort={isReverseSort.Surname}
      />
      <SortParam
        type="Name"
        name={"Имя"}
        onClick={onClick}
        isReverseSort={isReverseSort.Name}
      />
      <SortParam
        type="Position"
        name={"Должность"}
        onClick={onClick}
        isReverseSort={isReverseSort.Position}
      />
      <div>Телефон</div>
    </div>
  );
};

export default EmployeesListHeader;
