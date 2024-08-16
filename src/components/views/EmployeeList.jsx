import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../store/employeesSlice"


import "./styles/tailwindStyle.css"

export default function EmployeeList({pEmployees = [], dispatch})
{
    const navigate = useNavigate();


    function mapTasks(tasks){
        if (tasks){ // This if is to prevent any quick load crashes
            const tasksMapped = tasks.map((task) => <div onClick={()=>{clickTask(task.id)}}> {task.description}</div>)
            return (
                <p>{tasksMapped}</p>
            )
        } 
        return <div></div>

    }

    const listedEmployees = [].concat(pEmployees).sort((a,b) => a.id < b.id ? 1 : -1).map((empl) => (
        <div 
            className="list-row"
            key={empl.id}
        >
                <div id={"employee-"+empl.id} 
                    className="employee-list-info-col"

                >
                    <p onClick={()=>{clickRow(empl.id)}}>{empl.id}</p>
                    <p onClick={()=>{clickRow(empl.id)}}>{empl.firstname}</p>
                    <p onClick={()=>{clickRow(empl.id)}}>{empl.lastname}</p>
                    <p>{( empl.department) ? empl.department : "None" }</p>
                    
                    {mapTasks(empl.tasks)}
                    {/* <p>{empl.tasks}</p> */}
                </div>

                <div className="id-remove-col"
                onClick={() => dispatch(deleteEmployee(empl.id))}>
                    
                
                    <p className="remove-data">X</p>
                </div>
        </div>
    ));

    function clickRow(id)
    {
        //console.log("rah");
        const newURL = `/employees/${id}`;
        navigate(newURL);
    }

    function clickTask(id){
        const newURL = `/tasks/${id}`;
        navigate(newURL);
    }

    if(pEmployees.length > 0)
    {
            return(
                <div className = "list">
                <p className="table-caption">
                        Employee List
                </p>
                <div className="list-row list-header">
                        <div className="employee-list-info-col">
                            <p>ID</p>
                            <p>First Name</p>
                            <p>Last Name</p>
                            <p>Department</p>
                            <p>Task(s)</p>
                        </div>
    
                        <div>
                            <p>Remove</p>
                        </div>
                </div>
    
                <div>
                    {listedEmployees}
                </div>
            </div>
        );
    }
    else{
        return(
            <div className = "list">
                <p className="table-caption">
                        Employee List
                </p>
                <div className="list-row list-header"
                    //style={{color:'black', display:'grid', gridTemplateColumns: 'auto 70px', gap:'100px'}}
                >
                        <div className="header-info-col">
                            <p>ID</p>
                            <p>First Name</p>
                            <p>Last Name</p>
                            <p>Department</p>
                            <p>Task</p>
                        </div>

                        <div>
                            <p>Remove</p>
                        </div>
                </div>

                <div style={{textAlign:'center', paddingTop:'40px', paddingBottom:'20px'}}>
                    No employees found
                </div>
            </div>
        );
    }
}

