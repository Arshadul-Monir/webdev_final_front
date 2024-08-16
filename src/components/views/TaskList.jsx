import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../store/tasksSlice"


import "./styles/tailwindStyle.css"

export default function TaskList({pTasks = [], dispatch})
{
    const navigate = useNavigate();

    const listedTasks = [].concat(pTasks).sort((a,b) => a.id < b.id ? 1 : -1).map((task) => (
        <div 
            className="list-row"
            key={task.id}
        >
                <div id={"task-"+task.id} 

                    className="task-info-col"
                    
                >
                    <p onClick={()=>{clickRow(task.id)}}>{task.id}</p>
                    <p onClick={()=>{clickRow(task.id)}}>{task.priority}</p>
                    <p onClick={()=>{clickRow(task.id)}}>{task.description}</p>
                    <p onClick={()=>{clickRow(task.id)}}>{task.isComplete? "Y" : "N"}</p>
                    <p>{(task.employee)? <div onClick={()=>{clickEmployee(task.employee.id)}}> {task.employee.firstname+ " " +task.employee.lastname} </div>: "N/A"}</p>

                </div>

                <div className="remove-col"
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

    function clickEmployee(id){
        const newURL = `/employees/${id}`;
        navigate(newURL);
    }

    if(pTasks.length > 0)
    {
            return(
            <div className = "list">
                <p className="table-caption">
                        Task List
                </p>
                <div className="list-row list-header"
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
            <div className = "list">
                <p className="table-caption">
                        Task List
                </p>
                <div className="list-row list-header"
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

