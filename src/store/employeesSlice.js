//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;

      case 'add_empl':
        return state = [...state , action.newItem];
      
      case 'edit_empl':
        return state;
      
      case 'delete_empl':
        return state.filter((empl) => empl.id != action.id);
      
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api/employees";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}`);
    console.log (res.data);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

/* EDIT EMPLOYEE */
export const editEmployee = Employee => async dispatch => {
  try {
    let res = await axios.put(`${PATH}/${employee.id}`, employee);
    //res.data is the updated course
    dispatch({type: 'employees/employeeUpdated', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};