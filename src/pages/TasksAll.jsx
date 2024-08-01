export default function TaskPage()
{
    

    return(
        <div>
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
        <tr>
            <th>{task.id}</th>
            <th>{task.priority_lvl}</th>
            <th>{task.description}</th>
            <th>{task.complete? "Complete" : "Incomeplete"}</th>
            <th>{task.owner}</th>
        </tr>
    ));

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Priority Level</th>
                    <th>Description</th>
                    <th>Completion Status</th>
                    <th>Owner</th>
                </tr>
            </thead>

            <tbody>
                {listedTasks}
            </tbody>
        </table>
    );
}