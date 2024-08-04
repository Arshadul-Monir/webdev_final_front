import { Link, useNavigate } from "react-router-dom";
import "./TasksAll.css"

export default function TaskPage()
{
    const dummyTasks = [
        {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
        {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
        {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
        {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    ];

    return(
        <div>
            <NavigationButtons></NavigationButtons>
            <TaskList pTasks={dummyTasks}></TaskList>
        </div>
    );
}

function TaskList({pTasks})
{
    const navigate = useNavigate();

    const listedTasks = pTasks.map((task) => (
        <div className="task-list-row"
                //style={{backgroundColor:'#2DFFF233',color:'black'}}
                style={{color:'black', display:'grid', gridTemplateColumns: 'auto 70px', gap:'100px'}}
            >
                <div className="task-info-col"
                    style={{display:'grid', gridTemplateColumns: '1fr 1fr 3fr 1fr 2fr', gap:'5px'}}
                    onMouseOver={()=>selectRow(task.id)} 
                    onMouseLeave={()=>{deselectRow(task.id)}}
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
                    <p>X</p>
                </div>
        </div>
    ));


    function selectRow(id)
    {
        //console.log(id);
        const row = document.getElementById("row-"+id);
        row.style.backgroundColor = '#2DFFF233';

        const id_number = document.getElementById("id-"+id);
        const priority_level = document.getElementById("priority-level-"+id);
        const description = document.getElementById("description-"+id);
        const completion_status = document.getElementById("completion-status-"+id);
        const owner = document.getElementById("owner-"+id);

        selectData(id_number);
        selectData(priority_level);
        selectData(description);
        selectData(completion_status);
        selectData(owner);
    }

    function selectData(pElement)
    {
        pElement.style.textDecoration = "underline";
        pElement.style.fontStyle = "italic";
        pElement.style.fontWeight = "bold";
    }

    function deselectRow(id)
    {
        //console.log("de",id);
        const row = document.getElementById("row-"+id);
        row.style.backgroundColor = 'white';

        const id_number = document.getElementById("id-"+id);
        const priority_level = document.getElementById("priority-level-"+id);
        const description = document.getElementById("description-"+id);
        const completion_status = document.getElementById("completion-status-"+id);
        const owner = document.getElementById("owner-"+id);

        deselectData(id_number);
        deselectData(priority_level);
        deselectData(description);
        deselectData(completion_status);
        deselectData(owner);
    }

    function deselectData(pElement)
    {
        pElement.style.textDecoration = "none";
        pElement.style.fontStyle = "normal"; 
        pElement.style.fontWeight = "normal";
    }

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
        <div className = "task-list"
            style={{backgroundColor: 'white', color:'black', display:'flex', flexDirection: 'column',
                paddingLeft: '5px', paddingRight: '20px'
            }}
        >
            <p className="table-caption">
                    Task List
            </p>
            <div className="task-list-row task-list-header"
                //style={{backgroundColor:'#2DFFF233',color:'black'}}
                style={{color:'black', display:'grid', gridTemplateColumns: 'auto 70px', gap:'100px'}}
            >
                    <div className="task-info-col"
                        style={{display:'grid', gridTemplateColumns: '1fr 1fr 3fr 1fr 2fr'}}
                    >
                        <p>ID</p>
                        <p>Priority</p>
                        <p>Description</p>
                        <p>Completion</p>
                        <p>Owner</p>
                    </div>

                    <div className="task-remove-col">
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