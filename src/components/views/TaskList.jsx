import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../store/tasksSlice"


import "./styles/tailwindStyle.css"

export default function TaskList({pTasks = [], dispatch})
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
                    <p>{task.priority}</p>
                    <p>{task.description}</p>
                    <p>{task.complete? "Y" : "N"}</p>
                    <p>{task.owner}</p>
                </div>

                <div className="task-remove-col"
                    onClick={() => dispatch(deleteTask(task.id))}>
                
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


    if(pTasks.length > 0)
    {
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

                <div style={{minHeight:'84px'}}>
                    {listedTasks}
                </div>
            </div>
        );
    }
    else{
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

                <div style={{textAlign:'center', paddingTop:'40px', paddingBottom:'20px'}}>
                    No tasks found
                </div>
            </div>
        );
    }
}

