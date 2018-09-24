const viewEmployeeList = (employeeList) => ({
    type: 'EMPLOYEE_LIST',
    payload: employeeList
}); 

const addEmployee = (employeeList) => ({
    type: 'ADD_EMPLOYEE',
    payload: employeeList
});

export default {
    viewEmployeeList,
    addEmployee
};