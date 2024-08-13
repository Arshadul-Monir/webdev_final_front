
import { Link } from "react-router-dom";
// import "./TasksAll.css"
import "./Table.css"
import "../index.css"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../store/tasksSlice";
import TaskList from "../components/TaskList";

export default function TaskPage()
{
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);
    const disp = useDispatch();

    useEffect(()=>{
        disp(fetchTasks());
    },[disp]);

    return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons />
                <TaskList pTasks={tasks} dispatch={disp}></TaskList>
            </div>

        </div>
    );
}

function NavigationButtons()
{
    return(
        <div id ="nav-bar " className="flex justify-evenly pb-[24px]">
            <Link className="nav-button" to={"/"}>
                Home
            </Link>
            <Link className="nav-button" to={"/employees"}>
                View All Employees
            </Link>
            <Link className="nav-button" to={"/tasks/new"}>
                +
            </Link>
            <div className="w-[24px]"></div>
        </div>
    );
}
