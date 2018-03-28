import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeesList from "../components/EmployeesList";
import EmployeesListHeader from "../components/EmployeeListHeader";
import EmployeeCard from "../components/EmployeeCard";
import Header from "../components/Header";
import EditEmployeeCard from "../components/EditEmployeeCard";

import {
  showEmployeeInfo,
  sortParam,
  moveToNextPage,
  moveToPrevPage,
  deleteEmployee,
  deleteButtonClicked,
  addNewEmployee,
  changeEditInputs,
  editButtonClicked,
  editEmployee,
  toEditEmloyeeSwitch,
  cancelCreate
} from "../actions/EmployeeActions";

import "./App.css";

class App extends Component {
  render() {
    let {
      Employees,
      isReverseSort,
      showedEmployee,
      pagination,
      deleteButtonIsClicked,
      isEditEmployeePage,
      showEmployeeInfo,
      sortParam,
      moveToNextPage,
      moveToPrevPage,
      deleteEmployee,
      deleteButtonClicked,
      addNewEmployee,
      changeEditInputs,
      editInputs,
      editButtonClicked,
      isEditButtonClicked,
      editEmployee,
      toEditEmloyeeSwitch,
      cancelCreate
    } = this.props;
    let { first, second } = pagination;
    let PageOfEmployees = Employees.slice(first, second);
    return (
      <div>
        {!isEditEmployeePage ? (
          <div className="App">
            <Header onCreateClick={()=>toEditEmloyeeSwitch(isEditEmployeePage)}/>
            <div className="Employee-list">

              <EmployeesListHeader
                onClick={el =>
                  sortParam(el.target.id, Employees, isReverseSort)
                }
                {...this.props}
              />

              <EmployeesList
                PageOfEmployees={PageOfEmployees}

                onClick={id => showEmployeeInfo(parseInt(id, 10), Employees)}
                MoveToPrevPage={() =>
                  moveToPrevPage(pagination, Employees.length)
                }
                MoveToNextPage={() =>
                  moveToNextPage(pagination, Employees.length)
                }
                {...this.props}
              />
            </div>

            <EmployeeCard
              onPermittedDeleteClick={() =>
                deleteEmployee(
                  showedEmployee.id,
                  Employees,
                  deleteButtonIsClicked
                )
              }
              onClick={() => deleteButtonClicked(deleteButtonIsClicked)}
              onEditClick={() =>
                editButtonClicked(showedEmployee, isEditButtonClicked,isEditEmployeePage)
              }
              {...this.props}
            />
          </div>
        ) : (
          <EditEmployeeCard
            onAddClick={employee => addNewEmployee(employee,isEditEmployeePage)}
            onChange={el =>
              changeEditInputs(el.target.id, el.target.value, editInputs)
            }
            onSaveClick={() =>
              editEmployee(showedEmployee.id, Employees, editInputs,isEditEmployeePage,isEditButtonClicked)
            }
            cancelCreate ={()=>cancelCreate(isEditEmployeePage,isEditButtonClicked)}
              {...this.props}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let props = state.EmployeeReducer;
  return { ...props };
};

const mapDispatchToProps = dispatch => {
  return {
    showEmployeeInfo: (id, employees) => {
      dispatch(showEmployeeInfo(id, employees));
    },
    sortParam: (id, employees, isReverseSort) => {
      dispatch(sortParam(id, employees, isReverseSort));
    },
    moveToNextPage: (pagination, length) => {
      dispatch(moveToNextPage(pagination, length));
    },
    moveToPrevPage: (pagination, length) => {
      dispatch(moveToPrevPage(pagination, length));
    },
    deleteButtonClicked: deleteButtonIsClicked => {
      dispatch(deleteButtonClicked(deleteButtonIsClicked));
    },
    cancelCreate: (isEditEmployeePage,isEditButtonClicked) => {
      dispatch(cancelCreate(isEditButtonClicked));
      dispatch(toEditEmloyeeSwitch(isEditEmployeePage));
    },
    toEditEmloyeeSwitch: isEditEmployeePage => {
      dispatch(toEditEmloyeeSwitch(isEditEmployeePage));
    },
    editButtonClicked: (showedEmployee, isEditButtonClicked,isEditEmployeePage) => {
      dispatch(editButtonClicked(showedEmployee, isEditButtonClicked));
        dispatch(toEditEmloyeeSwitch(isEditEmployeePage));
    },
    editEmployee: (id, employees, values,isEditEmployeePage,isEditButtonClicked) => {
      dispatch(editEmployee(id, employees, values,isEditButtonClicked));
      dispatch(toEditEmloyeeSwitch(isEditEmployeePage));
    },
    addNewEmployee: (employee,isEditEmployeePage) => {
      dispatch(addNewEmployee(employee));
      dispatch(toEditEmloyeeSwitch(isEditEmployeePage));
    },
    changeEditInputs: (id, value, inputs) => {
      dispatch(changeEditInputs(id, value, inputs));
    },
    deleteEmployee: (id, employees, deleteButtonIsClicked) => {
      dispatch(deleteEmployee(id, employees)),
        dispatch(showEmployeeInfo(id + 1, employees));
      dispatch(deleteButtonClicked(deleteButtonIsClicked));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
