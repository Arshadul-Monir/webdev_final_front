export default function TaskPage()
{
    const dummyTasks = [
        {id: 88, priority_lvl: 2, description : "ballz", complete: false, owner : "joe mama"},
        {id: 1, priority_lvl: 5, description : "invade poland", complete: true, owner : "ludwig van beethoven"},
        {id: 313, priority_lvl: 10, description : "become google", complete: false, owner : "kyle"},
        {id: 404, priority_lvl: 1000, description : "defend gotham", complete: false, owner : "the dark knight"}
    ];

const listedTasks = dummyTasks.map((task) => (
        <p>{task.id}, {task.priority_lvl}, {task.description}, {task.complete? "Complete" : "Incomeplete"}, owner</p>
    ));

    return(
        <div>
            <p> niuts</p>
            {listedTasks}
        </div>
    );
}