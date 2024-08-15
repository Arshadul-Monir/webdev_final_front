import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../store/employeesSlice"


import "./styles/tailwindStyle.css"

export default function EmployeeList({pEmployees = [], dispatch})
{
    const navigate = useNavigate();

    const listedEmployees = [].concat(pEmployees).sort((a,b) => a.id < b.id ? 1 : -1).map((empl) => (
        <div 
            className="list-row"
            key={empl.id}
        >
                <div id={"employee-"+empl.id} 
                    className="info-col"
                    onClick={()=>{clickRow(empl.id)}}
                >
                    <p>{empl.id}</p>
                    <p>{empl.firstname}</p>
                    <p>{empl.lastname}</p>
                    <p>{empl.department}</p>

                    {/* <p>{empl.task}</p> */}
                    <p> WE NEED TO MAP TASKS OUTS HERE</p>
                </div>

                <div className="id-remove-col"
                onClick={() => dispatch(deleteEmployee(employee.id))}>
                    
                
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

    if(pEmployees.length > 0)
    {
            return(
                <div className = "list">
                <p className="table-caption">
                        Employee List
                </p>
                <div className="list-row list-header">
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

