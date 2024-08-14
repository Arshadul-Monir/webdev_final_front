import { Link, useNavigate } from "react-router-dom";
import "./Table.css"
// import "../index.css"
import "./styles/tailwindStyle.css"

import NavigationButtons from "./NavigationButtons";

export default function AllEmployeesView({employees})
{

    return(
        <div className="h-screen w-full flex justify-center">
            <div className="contextDiv">
                <NavigationButtons buttonTwo="Tasks" buttonThree="New_Employee"></NavigationButtons>
                {/* <EmployeeList pEmployees={employees} dispatch={disp}></EmployeeList> */}
                <EmployeeList pEmployees={employees} ></EmployeeList>

            </div>
        </div>
    );
}

function EmployeeList({pEmployees})
{
    const navigate = useNavigate();

    const listedEmployees = pEmployees.map((empl) => (
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
                    // onClick={() => dispatch({ type: 'delete_empl', id: empl.id })}
                    >
                
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

    //unfinished, will perform deletion of task of the given id
    function deleteTask(id)
    {
        console.log("delete", id)
    }

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
