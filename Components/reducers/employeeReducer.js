import { EMPLOYEE_LIST, ADD_EMPLOYEE } from '../constants/actionType';

const object = {
    employeeList: []
};
const employeeListReducer = (state = object, action) => {
    switch(action.type) {
        case EMPLOYEE_LIST:
            return {...state, ...action.payload};
        case ADD_EMPLOYEE:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default employeeListReducer;
