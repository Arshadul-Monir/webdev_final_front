import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../store/employeesSlice"


import "./styles/tailwindStyle.css"

export default function EmployeeList({pEmployees = [], dispatch})
{
    const navigate = useNavigate();

    const listedEmployees = [].concat(pEmployees).sort((a,b) => a.id < b.id ? 1 : -1).map((employee) => (
        <div 
            className="list-row"
            key={employee.id}
        >
                <div id={"employee-"+employee.id} 
                    className="info-col"
                    onClick={()=>{clickRow(employee.id)}}
                >
                    <p>{employee.id}</p>
                    <p>{employee.first_name}</p>
                    <p>{employee.last_name}</p>
                    <p>{employee.department}</p>
                    <p>{(employee.employee)? employee.employee.firstname+ " " +employee.employee.lastname : "N/A"}</p>
                </div>

                <div className="remove-col"
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
                    No employees found
                </div>
            </div>
        );
    }
}

