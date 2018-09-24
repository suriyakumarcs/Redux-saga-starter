import { takeLatest } from 'redux-saga/effects';

import EmployeeActions from '../constants/actionType.js';
import { fetchAllEmployee } from './EmployeeSaga';


export default function* saga() {
    yield takeLatest(EmployeeActions.EMPLOYEE_LIST, fetchAllEmployee);
}