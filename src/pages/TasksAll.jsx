import { Link } from "react-router-dom";
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
    const dummyTasks = [
        {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
        {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
        {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
        {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    ];

    const listedTasks = dummyTasks.map((task) => (
        <tr key={task.id} id={"row-"+task.id}>
            <td onMouseOver={()=>selectRow(task.id)} onMouseLeave={()=>{deselectRow(task.id)}}>{task.id}</td>
            <td onMouseOver={()=>selectRow(task.id)} onMouseLeave={()=>{deselectRow(task.id)}}>{task.priority_lvl}</td>
            <td onMouseOver={()=>selectRow(task.id)} onMouseLeave={()=>{deselectRow(task.id)}}>{task.description}</td>
            <td onMouseOver={()=>selectRow(task.id)} onMouseLeave={()=>{deselectRow(task.id)}}>{task.complete? "Complete" : "Incomeplete"}</td>
            <td onMouseOver={()=>selectRow(task.id)} onMouseLeave={()=>{deselectRow(task.id)}}>{task.owner}</td>
            
            <td className="remove-col">X</td>
        </tr>
    ));

    function selectRow(id)
    {
        console.log(id);
        const row = document.getElementById("row-"+id);
        row.style.backgroundColor = '#2DFFF233';
        row.style.borderLeftColor= "#2DFFF233";
        row.style.borderRightColor= "#2DFFF233";
    }

    function deselectRow(id)
    {
        console.log("de",id);
        const row = document.getElementById("row-"+id);
        row.style.backgroundColor = 'white';
        row.style.border= "5px solid transparent";
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

                    <th className="remove-col">Remove </th>
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