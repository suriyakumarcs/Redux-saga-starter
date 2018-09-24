import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import employeeListReducer from './employeeReducer';

export default combineReducers({
    employeeDetail: employeeListReducer,
    form: formReducer
});
