import { Link, useNavigate } from "react-router-dom";
import "./Table.css"
import "../index.css"
import { useSelector,useDispatch } from "react-redux";

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

    return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons></NavigationButtons>
                <TaskList pTasks={tasks} dispatch={disp}></TaskList>
            </div>

        </div>
    );
}

function TaskList({pTasks, dispatch})
{
    const navigate = useNavigate();

    const listedTasks = pTasks.map((task) => (
        <div 
            className="list-row"
            key={task.id}
        >
                <div id={"task-"+task.id} 
                    className="info-col"
                    onClick={()=>{clickRow(task.id)}}
                >
                    <p>{task.id}</p>
                    <p>{task.priority_lvl}</p>
                    <p>{task.description}</p>
                    <p>{task.complete? "Y" : "N"}</p>
                    <p>{task.owner}</p>
                </div>

                <div className="remove-col"
                    onClick={() => dispatch({ type: 'delete_task', id: task.id })}>
                
                    <p className="remove-data">X</p>
                </div>
        </div>
    ));

    function clickRow(id)
    {
        //console.log("rah");
        const newURL = `/tasks/${id}`;
        navigate(newURL);
    }

    //unfinished, will perform deletion of task of the given id
    function deleteTask(id)
    {
        console.log("delete", id)
    }

    return(
        <div className = "list">
            <p className="table-caption">
                    Task List
            </p>
            <div className="list-row list-header">
                    <div className="header-info-col">
                        <p>ID</p>
                        <p>Priority</p>
                        <p>Description</p>
                        <p>Completion</p>
                        <p>Owner</p>
                    </div>

                    <div>
                        <p>Remove</p>
                    </div>
            </div>

            <div>
                {listedTasks}
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