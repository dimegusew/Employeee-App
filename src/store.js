import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import {EmployeeReducer} from './reducers/EmployeeReducer';


const store = createStore(combineReducers({EmployeeReducer}),
{}, applyMiddleware(logger));

export default store;
