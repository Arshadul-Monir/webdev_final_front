export default function TaskPage()
{
    return(
        <div>
            <NavigationButtons></NavigationButtons>
            <p> niuts</p>
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
            <th>{task.id}</th>
            <th>{task.priority_lvl}</th>
            <th>{task.description}</th>
            <th>{task.complete? "Complete" : "Incomeplete"}</th>
            <th>{task.owner}</th>
        </tr>
    ));

    return(
        <table>
            <caption 
                style = {{backgroundColor: 'white', color:'black'}}>
                    Task List
            </caption>
            <thead 
                style={{backgroundColor:'lightblue',color:'black'}}>
                <tr>
                    <th>ID</th>
                    <th>Priority Level</th>
                    <th>Description</th>
                    <th>Completion Status</th>
                    <th>Owner</th>
                </tr>
            </thead>

            <tbody 
            style = {{backgroundColor: 'white', color:'black'}}>
                {listedTasks}
            </tbody>
        </table>
    );
}

import { Link } from "react-router-dom";

function NavigationButtons()
{
    return(
        <div
            style={{
                width:"100%",
                display:"flex",
                justifyContent: "space-evenly"
            }}
        >
            <Link to={"/banana"}>
                fuck
            </Link>
            <Link to={"/"}>
                balls
            </Link>
            <button>
                +
            </button>
        </div>
    );
}