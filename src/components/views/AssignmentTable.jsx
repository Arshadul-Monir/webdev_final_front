import { editTask } from "../../store/tasksSlice";
import { useEffect, useState } from 'react'

import "./assign.css"

export default function AssignmentTable({
    employee,
    tasks = [],
    dispatch,

    // KYLE this is what im adding
    availableTasks,
    employeeTasks,
    handleTasksChange,

}) 
{

    function assign(task){
        console.log("assign");
        handleTasksChange(true, task);
        dispatch(editTask({...task,employeeId: employee.id}));

    } 

    function unassign(task){
        console.log("unassign");
        handleTasksChange(false, task);
        dispatch(editTask({...task,employeeId: null})); // This will change the backend

    } 

    console.log(employee);
    if(!employee)
    {
        return(<div></div>);
    }
    else
    {
        return (
        <div
            style={{
                display :"grid",
                gridTemplateColumns: "1fr 1fr",
                gap : "50px"
            }}
        >
            <TaskTable
                tasks={availableTasks}
                right = {false}
                operation={assign}
            ></TaskTable>
            <TaskTable
                tasks={employeeTasks}
                right = {true}
                employee={employee}
                operation={unassign}
            ></TaskTable>
        </div>
        );
    }
}

import { useNavigate } from "react-router-dom";

function TaskTable({
    tasks = [],
    right = true,
    employee,
    operation=() => console.log("rah")
})
{

const navigate = useNavigate();

function clickRow(id)
{
    //console.log("rah");
    const newURL = `/tasks/${id}`;
    navigate(newURL);
}


const tableStyle = (!right)?{
    gridTemplateColumns:"auto 25px",
    gap:"10px",
    textAlign:"center",
}:
{
    gridTemplateColumns:"25px auto",
    gap:"10px",
    textAlign:"center",
};

const header = (
    <>
        <p className="table-caption"
            style={{textAlign:"center"}}
        >
            {right ? employee.firstname + " " + employee.lastname + "'s Tasks" : "Available Tasks"}
        </p>
        <div className="task-list-row task-list-header"
            style={tableStyle}
        >
            {right &&
            <div>
                {/* <p>{"<-"}</p> */}
            </div>}

            <div className="header-info-col"
                style={{
                    gridTemplateColumns:"1fr 2fr 5fr",
                    gap:"10px",
                }}
            >
                <p>ID</p>
                <p>Priority</p>
                <p>Description</p>
            </div>

            {!right &&
            <div>
            
                {/* <p>{"->"}</p> */}
            </div>}
        </div>
    </>
);

    const listedTasks = [].concat(tasks).sort((a,b) => a.id < b.id ? 1 : -1).map((task) => (
        <div 
            className="task-list-row"
            key={task.id}
            style={tableStyle}
        >
                {right &&
                <div>
                
                    <p className="ass"
                       onClick={() => operation(task)} 
                    >{"<-"}</p>
                </div>}

                <div id={"task-"+task.id} 
                    className="task-info-col"
                    style={{
                        gridTemplateColumns:"1fr 2fr 5fr",
                        gap:"10px",
                    }}
                    onClick={()=>{clickRow(task.id)}}
                >
                    <p>{task.id}</p>
                    <p>{task.priority}</p>
                    <p>{task.description}</p>
                </div>

                {!right &&
                <div>
                
                    <p className="ass"
                        onClick={() => operation(task)}
                    >{"->"}</p>
                </div>}
        </div>
    ));

    if(tasks.length > 0)
    {
        return(
            <div className = "task-list"
                style={{width:"400px"}}
            >
                {header}

                <div style={{minHeight:'84px'}}>
                    {listedTasks}
                </div>
            </div>
        );
    }
    else{
        return(
            <div className = "task-list"
                style={{width:"400px"}}
            >
                {header}

                <div style={{textAlign:'center', paddingTop:'40px', paddingBottom:'20px'}}>
                    No tasks found
                </div>
            </div>
        );
    }
    
}

