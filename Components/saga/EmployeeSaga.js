import { call, put } from 'redux-saga/effects';

import { fetchEmployee } from '../service/Employee';


function* fetchAllEmployee(action) {
    try {
        console.log("action", action);
        const response = yield call(fetchEmployee, action);
        console.log("response", response);
    } catch (error) {
        console.log("error", error);    
    }
}

module.exports = {
    fetchAllEmployee
};