

//dummy data
import tasks from './dummydata/tasks.json';

//REDUCER
const initialState = tasks; // []

export function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'tasks/tasksLoaded':
        return action.payload;

      case 'add_task':
        //console.log("IS IT RUNNING???")

        //state.concat(action.newItem);
        // console.log(action.newItem);
        // state.concat(action.newItem);
        // console.log(state);
        return state = [...state , action.newItem];
          // ...state,
          // tasks: [...state.tasks, action.newItem]

      case 'edit_task':
        return state

      case 'delete_task':
        // console.log("Running delete")
        return state.filter((task) => task.id != action.id)


      default:
        //console.log("asdfasf")
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