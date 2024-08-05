import { Link, useNavigate } from "react-router-dom";
import "./TasksAll.css"
import { useSelector } from "react-redux";

export default function TaskPage()
{
    // const dummyTasks = [
    //     {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
    //     {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
    //     {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
    //     {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    // ];

    const tasks = useSelector(state => state.tasks);
    // console.log(tasks);

    return(
        <div>
            <NavigationButtons></NavigationButtons>
            <TaskList pTasks={tasks}></TaskList>
        </div>
    );
}

function TaskList({pTasks})
{
    const navigate = useNavigate();

    const listedTasks = pTasks.map((task) => (
        <div 
            className="task-list-row"
            key={task.id}
        >
                <div id={"task-"+task.id} 
                    className="task-info-col"
                    onClick={()=>{clickRow(task.id)}}
                >
                    <p>{task.id}</p>
                    <p>{task.priority_lvl}</p>
                    <p>{task.description}</p>
                    <p>{task.complete? "Y" : "N"}</p>
                    <p>{task.owner}</p>
                </div>

                <div className="task-remove-col"
                    onClick={()=>{deleteTask(task.id)}}
                >
                    <p className="remove-data">X</p>
                </div>
        </div>
    ));

    function clickRow(id)
    {
        //console.log("rah");
        const newURL = "/banana";
        navigate(newURL);
    }

    //unfinished, will perform deletion of task of the given id
    function deleteTask(id)
    {
        console.log("delete", id)
    }

    return(
        <div className = "task-list">
            <p className="table-caption">
                    Task List
            </p>
            <div className="task-list-row task-list-header"
                //style={{color:'black', display:'grid', gridTemplateColumns: 'auto 70px', gap:'100px'}}
            >
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
        <div id ="nav-bar">
            <Link className="nav-button" to={"/banana"}>
                fuck
            </Link>
            <Link className="nav-button" to={"/"}>
                balls
            </Link>
            <button className="nav-button">
                +
            </button>
        </div>
    );
}