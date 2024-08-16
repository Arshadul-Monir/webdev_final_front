import AllTasksView from "../views/AllTasksView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/tasksSlice";

function AllTasksContainer() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTasks());
      }, [dispatch]);
    
    return (
      <AllTasksView tasks={tasks} dispatch={dispatch} />
    );

}

export default AllTasksContainer;