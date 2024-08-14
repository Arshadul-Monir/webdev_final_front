
import { Link } from "react-router-dom";
// import "./TasksAll.css"
import "./Table.css"
import "./styles/tailwindStyle.css"
import TaskList from "./TaskList";
import NavigationButtons from "../components/NavigationButtons";

export default function AllTasksView({ tasks, deleteTask })
{
    // const tasks = useSelector(state => state.tasks);
    // // console.log(tasks);
    // const disp = useDispatch();

    // useEffect(()=>{
    //     disp(fetchTasks());
    // },[disp]);

    return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons buttonOne="Home" buttonTwo="Employees" buttonThree="New_Task"></NavigationButtons>
                <TaskList pTasks={tasks} dispatch={deleteTask}></TaskList>
            </div>

        </div>
    );
}
