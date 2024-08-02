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
        <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.priority_lvl}</td>
            <td>{task.description}</td>
            <td>{task.complete? "Complete" : "Incomeplete"}</td>
            <td>{task.owner}</td>
            <td class="remove-col">X</td>
        </tr>
    ));

    return(
        <table>
            <caption>
                    Task List
            </caption>
            <thead 
                style={{backgroundColor:'#2DFFF233',color:'black'}}>
                <tr>
                    <th>ID</th>
                    <th>Priority Level</th>
                    <th>Description</th>
                    <th>Completion Status</th>
                    <th>Owner</th>

                    <th class="remove-col">Remove </th>
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
            <Link class="nav-button" to={"/banana"}>
                fuck
            </Link>
            <Link class="nav-button" to={"/"}>
                balls
            </Link>
            <button class="nav-button">
                +
            </button>
        </div>
    );
}