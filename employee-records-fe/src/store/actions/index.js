import * as actionTypes from './actionTypes'
const axios = require('axios');

axios.defaults.baseURL = 'https://localhost:44326/';

export const getAllEmployees = (dispatch) => {
    axios.get('/employee/get/all')
        .then(response => dispatch(setEmployees(response.data)));
}

export const setEmployees = (employees) => {
    return  {
        type: actionTypes.SET_EMPLOYEES,
        employees
    };
}

export const openUpdateModal = (currentEmployee) => {
    return  {
        type: actionTypes.OPEN_UPDATE_MODAL,
        currentEmployee
    };
}

export const openDeleteModal = (currentEmployee) => {
    return  {
        type: actionTypes.OPEN_DELETE_MODAL,
        currentEmployee
    };
}

export const openCreateModal = () => {
    return  {
        type: actionTypes.OPEN_CREATE_MODAL
    };
}

export const unsetCurrentEmployee = () => {
    return {
        type: actionTypes.UNSET_CURRENT_EMPLOYEE
    }
}

export const updateEmployee = (dispatch, employee) => {
    axios.post('/employee/update', employee)
        .then(() => {
            getAllEmployees(dispatch)
            dispatch(unsetCurrentEmployee())
        });
}

export const createEmployee = (dispatch, employee) => {
    axios.post('/employee/add', employee)
        .then(() => {
            getAllEmployees(dispatch)
            dispatch(unsetCurrentEmployee())
        });
}

export const deleteEmployee = (dispatch, employeeId) => {   
    axios.delete('/employee/delete/' + employeeId)
        .then(() => {
            getAllEmployees(dispatch)
            dispatch(unsetCurrentEmployee())
        });

}
