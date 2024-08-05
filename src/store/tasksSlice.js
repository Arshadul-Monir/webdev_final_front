

//dummy data
import tasks from './dummydata/tasks.json';

//REDUCER
const initialState = tasks;

export function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'tasks/tasksLoaded':
        return action.payload;
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "https://jsonplaceholder.typicode.com";

//Thunk 
export const fetchTasks = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/todos`);
    dispatch({type: 'tasks/tasksLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};