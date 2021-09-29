import * as actionTypes from '../actions/actionTypes'

const initialState = {
    employees: [],
    currentEmployee: {
        FirstName: null,
        MiddleName: null,
        LastName: null,
        action: null
    }
};

export const reducer = (state = initialState, action) => {
    const { employees, currentEmployee } = action
    switch (action.type) {
        case actionTypes.SET_EMPLOYEES:
            return {
                ...state,
                employees
            }
        case actionTypes.OPEN_UPDATE_MODAL:
            return {
                ...state,
                currentEmployee: {
                    ...currentEmployee,
                    action: "Edit"
                }
            }
        case actionTypes.OPEN_DELETE_MODAL:
            return {
                ...state,
                currentEmployee: {
                    ...currentEmployee,
                    action: "Delete"
                }
            }
        case actionTypes.OPEN_CREATE_MODAL:
            return {
                ...state,
                currentEmployee: {
                    ...state.currentEmployee,
                    action: "Add"
                }
            }
        case actionTypes.UNSET_CURRENT_EMPLOYEE:
            return {
                ...state,
                currentEmployee: initialState.currentEmployee
            }
        default:
            return state;
    }
}

export default reducer