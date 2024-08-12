import { Link } from "react-router-dom";
import "./TasksAll.css"
import "../index.css"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees } from "../store/employeesSlice";
import TaskList from "../components/TaskList";

export default function TaskPage()
{
    // const dummyTasks = [
    //     {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
    //     {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
    //     {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
    //     {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    // ];

    const tasks = useSelector(state => state.tasks);
    const disp = useDispatch();
    // console.log(tasks[0].priority_lvl);

    useEffect(()=>{
        disp(fetchEmployees());
    },[disp]);

    return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons></NavigationButtons>
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
                Employees
            </Link>
            <Link className="nav-button" to={"/tasks/new"}>
                +
            </Link>
            <div className="w-[24px]"></div>
        </div>
    );
}
