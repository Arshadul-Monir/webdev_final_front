import AllTasksView from "../views/AllTasksView";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/tasksSlice";

function AllTasksContainer() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
      dispatch(fetchTasks());
      
      // My lazy way of making sure new info is not missed without doing a 
      // real frontend data update function.
      if (!isLoaded){
        setTimeout(1000); // reloads info after 1 sec
        setIsLoaded(true)
      }

      }, [dispatch, isLoaded]);
    

    return (
      <AllTasksView tasks={tasks} dispatch={dispatch} />
    );

}

export default AllTasksContainer;