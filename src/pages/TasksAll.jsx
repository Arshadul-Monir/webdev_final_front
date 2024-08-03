import { Link, useNavigate } from "react-router-dom";
import "./TasksAll.css"

export default function TaskPage()
{
    return(
        <div>
            <NavigationButtons></NavigationButtons>
            <TaskList></TaskList>
        </div>
    );
}

function TaskList()
{
    const navigate = useNavigate();
    
    const dummyTasks = [
        {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
        {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
        {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
        {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    ];

    const listedTasks = dummyTasks.map((task) => (
        <tr key={task.id} id={"row-"+task.id}>
            <td 
                id={"id-"+task.id}
                onMouseOver={()=>selectRow(task.id)} 
                onMouseLeave={()=>{deselectRow(task.id)}}
                onClick={()=>{clickRow(task.id)}}
            >
                {task.id}
            </td>
            <td 
                id={"priority-level-"+task.id}
                onMouseOver={()=>selectRow(task.id)} 
                onMouseLeave={()=>{deselectRow(task.id)}}
                onClick={()=>{clickRow(task.id)}}
            >
                {task.priority_lvl}
            </td>

            <td 
                id={"description-"+task.id}
                onMouseOver={()=>selectRow(task.id)} 
                onMouseLeave={()=>{deselectRow(task.id)}}
                onClick={()=>{clickRow(task.id)}}
            >
                {task.description}
            </td>
            
            <td 
                id={"completion-status-"+task.id}
                onMouseOver={()=>selectRow(task.id)} 
                onMouseLeave={()=>{deselectRow(task.id)}}
                onClick={()=>{clickRow(task.id)}}
            >
               {task.complete? "Complete" : "Incomeplete"}
            </td>

            <td 
                id={"owner-"+task.id}
                onMouseOver={()=>selectRow(task.id)} 
                onMouseLeave={()=>{deselectRow(task.id)}}
                onClick={()=>{clickRow(task.id)}}
            >
                {task.owner}
            </td>

            <td 
                className="remove-col remove-data"
                onClick={()=>{deleteTask(task.id)}}
            >
                X
            </td>
        </tr>
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
        <table>
            <caption>
                    Task List
            </caption>
            <thead 
                //style={{backgroundColor:'#2DFFF233',color:'black'}}
                style={{color:'black'}}
            >
                <tr>
                    <th>ID</th>
                    <th>Priority Level</th>
                    <th>Description</th>
                    <th>Completion Status</th>
                    <th>Owner</th>

                    <th className="remove-col">Remove</th>
                </tr>
            </thead>

            <tbody 
            style = {{backgroundColor: 'white', color:'black'}}>
                {listedTasks}
            </tbody>
        </table>
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