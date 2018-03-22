import {
  compareName,
  compareSurName,
  comparePosition,
  reverseCompareName,
  reverseCompareSurName,
  reverseComparePosition
} from "../functions/CompareFunctions";

export const showEmployeeInfo = (id, employees) => {
  return {
    type: "SHOW_EMPLOYEE_INFO",
    payload: employees.filter(el => el.id === id)[0]
  };
};
export const deleteButtonClicked = deleteButtonIsClicked => {
  return {
    type: "DELETE_BUTTON_CLICKED",
    payload: !deleteButtonIsClicked
  };
};
export const toEditEmloyeeSwitch = isEditEmployeePage => {
  return {
    type: "SWITCH_PAGES",
    payload: !isEditEmployeePage
  };
};

export const editEmployee = (id, employees, values, isEditButtonClicked) => {
  let editedEmployee = {
    ...employees.filter(el => el.id === id)[0],
    ...values
  };
  let editedEmployees = employees.map(
    el => (el.id === id ? editedEmployee : el)
  );
  return {
    type: "EDIT_EMPLOYEE",
    payload: {
      employees: [...editedEmployees],
      showedEmployee: editedEmployee,
      isEditButtonClicked: !isEditButtonClicked
    }
  };
};

export const editButtonClicked = (showedEmployee, isEditButtonClicked) => {
  return {
    type: "EDIT_BUTTON_CLICKED",
    payload: { showedEmployee, isEditButtonClicked: !isEditButtonClicked }
  };
};
export const cancelCreate = () => {
  return {
    type: "CANCEL_CREATE",
    payload: {}
  };
};

export const addNewEmployee = employee => {
  return {
    type: "ADD_NEW_EMPLOYEE",
    payload: employee
  };
};

export const deleteEmployee = (id, employees) => {
  return {
    type: "DELETE_EMPLOYEE",
    payload: [...employees.filter(el => el.id !== id)]
  };
};

export const changeEditInputs = (id, value, inputs) => {
  switch (id) {
    case "name":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, name: value }
      };
      break;

    case "surname":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, surname: value }
      };
      break;

    case "phone":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, phone: value }
      };
      break;

    case "manager":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, manager: value }
      };
      break;

    case "position":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, position: value }
      };
      break;

    case "photoLink":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, photo: value }
      };
      break;
    case "secondname":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, secondname: value }
      };
      break;
    case "peoples":
      return {
        type: "CHANGE_EDIT_INPUTS",
        payload: { ...inputs, peoples: [...value.split(" ")] }
      };
      break;
  }
};

export const moveToNextPage = (pagination, length) => {
  let { first, second } = pagination;
  return {
    type: "MOVE_TO_NEXT_PAGE",
    payload: {
      first: second < length ? first + 10 : first,
      second: second < length ? second + 10 : second
    }
  };
};
export const moveToPrevPage = (pagination, length) => {
  let { first, second } = pagination;
  return {
    type: "MOVE_TO_PREV_PAGE",
    payload: {
      first: first > 0 ? first - 10 : first,
      second: first > 0 ? second - 10 : second
    }
  };
};

export const sortParam = (param, employees, isReverseSort) => {
  switch (param) {
    case "Name":
      return {
        type: "SORTED_PARAMS",
        payload: {
          employees: [...employees].sort(
            isReverseSort.Name ? reverseCompareName : compareName
          ),
          isReverseSort: { ...isReverseSort, Name: !isReverseSort.Name }
        }
      };
      break;

    case "Surname":
      return {
        type: "SORTED_PARAMS",
        payload: {
          employees: [...employees].sort(
            isReverseSort.Surname ? reverseCompareSurName : compareSurName
          ),
          isReverseSort: { ...isReverseSort, Surname: !isReverseSort.Surname }
        }
      };
      break;

    case "Position":
      return {
        type: "SORTED_PARAMS",
        payload: {
          employees: [...employees].sort(
            isReverseSort.Position ? reverseComparePosition : comparePosition
          ),
          isReverseSort: { ...isReverseSort, Position: !isReverseSort.Position }
        }
      };
      break;
  }
};
