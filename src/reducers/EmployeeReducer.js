// import React, { Component } from 'react';
import {Employees} from '../EmployeeMock.js'
const initialState = {
  Employees,
  showedEmployee:Employees[0],
  isReverseSort:{
    Name:false,
    Surname:false,
    Position:false
  },
  pagination:{first:0,second:10},
  deleteButtonIsClicked:false,
  deleteIsPermit:false,
  isEditButtonClicked:false,
  isEditEmployeePage:false,
  editInputs:{
    name:'',
    surname:'',
    position:'',
    phone:'',
    photo:'',
    manager:'',
    secondname:'',
    peoples:[]
  }
}



export const EmployeeReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'SHOW_EMPLOYEE_INFO':
      state={
        ...state,
        showedEmployee: {...action.payload}
      }
      break;
    case 'CANCEL_CREATE':
      state={
        ...state,
        isEditButtonClicked:false,
        editInputs:{
          name:'',
          surname:'',
          position:'',
          phone:'',
          photo:'',
          manager:'',
          secondname:''
        }
      }
      break;
    case 'SORTED_PARAMS':
      state={
        ...state,
        Employees: action.payload.employees,
        isReverseSort: {...action.payload.isReverseSort}
      }
      break;
    case 'SWITCH_PAGES':
      state={
        ...state,
      isEditEmployeePage: action.payload
      }
      break;
    case 'MOVE_TO_NEXT_PAGE':
      state={
        ...state,
        pagination:{...action.payload}
      }
      break;

    case 'MOVE_TO_PREV_PAGE':
      state={
        ...state,
        pagination:{...action.payload}
      }
      break;
    case 'DELETE_BUTTON_CLICKED':
      state={
        ...state,
        deleteButtonIsClicked:action.payload
      }
      break;

    case 'EDIT_BUTTON_CLICKED':
      state={
        ...state,
        editInputs:action.payload.showedEmployee,
        isEditButtonClicked:action.payload.isEditButtonClicked

      }
      break;

    case 'DELETE_EMPLOYEE':
      state={
        ...state,
        Employees:[...action.payload]
      }
      break;

    case 'CHANGE_EDIT_INPUTS':
      state={
        ...state,
        editInputs:{...action.payload}
      }
      break;
    case 'EDIT_EMPLOYEE':
      state={
        ...state,
        Employees:[...action.payload.employees],
        showedEmployee:{...action.payload.showedEmployee},
        isEditButtonClicked:action.payload.isEditButtonClicked,
        editInputs:{
          name:'',
          surname:'',
          position:'',
          phone:'',
          photo:'',
          manager:'',
          secondname:''
        }
      }

      break;
    case 'ADD_NEW_EMPLOYEE':
      state={
        ...state,
        Employees:[...state.Employees,action.payload],
        editInputs:{
          name:'',
          surname:'',
          position:'',
          phone:'',
          photo:'',
          manager:'',
          secondname:''
        }
      }
      break;
  }
  return state;
}
