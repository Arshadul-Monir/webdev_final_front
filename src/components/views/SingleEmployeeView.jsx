import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"
import "./styles/tailwindStyle.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'
import NavigationButtons from "./NavigationButtons";
import { deleteEmployee } from "../../store/employeesSlice";

import AssignmentTable from "./AssignmentTable";

export default function SingleEmployeeView({empl, dispactchType,
  employee,

  //dispactchType,
  formData,
  handleFormChange,
  handleFormChangeNumber,

  changeMade,

  //AssignmentTable stuff
  newEntry,
  tasks,
  dispatch,

})
{
  function ValidateWarningText(){
    // document.getElementsByClassName("nav-button").disabled = true;
    const check1 = (formData.firstname == "")
    const check2 = (formData.lastname == "")
    if (changeMade && check1 && check2 ){
      return <div className="text-red-600"> Must Enter First and Last name</div>
    } else if (changeMade && check1){
      return <div className="text-red-600"> Must Enter First Name</div>
    } else if (changeMade && check2){
      return <div className="text-red-600"> Must Enter Last Name</div>
    } else {
      return <div></div>
    }
  }

  function BackOrSaveBtn(){
    const check1 = (formData.firstname == "")
    const check2 = (formData.lastname == "")

    if (changeMade && !( check1 || check2) ){
      return (   
 
        <Link type="button" className="nav-button" onClick={dispactchType} to={"/employees"}>
          Save 
        </Link>
      )
    } else {
      return (
        <Link type="button" className="nav-button" to={"/employees"}>
        Back 
      </Link>
      )
    }
  }

  const assignmentTable = (newEntry) ? (<div></div>) :
  (<AssignmentTable
    employee={employee} // fyi Kyle, if you are reading this I'm removing ur hard coded employee
    tasks={tasks}
    dispatch={dispatch}
    ></AssignmentTable>);
  
  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons buttonTwo="Tasks" buttonThree="Return_Employees"b></NavigationButtons>

          <div className="forumCol">
            <div className="flex justify-end">
              <ValidateWarningText />
              <BackOrSaveBtn />
            </div>

            <div className="forumRow">
              <div className="forumDiv">
                <div><label className="pl-[4px]" >Id</label></div>
                <div>
                  <p style={{textAlign:"left", paddingLeft:"50px"}}> 
                      {(!newEntry)? "New Employee!" : `Edit Employee ${employee.id}!`}
                  </p>
                </div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Department</label></div>
                <div>
                  <input type="text" id="" placeholder="Department..." className="pl-[4px]"
                  value={formData.department} 
                  onChange={handleFormChange}
                  name="department" />
                </div></div>

                {(newEntry) ? <div></div> :                 
                <Link className="nav-button" to={"/employees"} 
                  onClick={(!formData.id)? () => null : deleteEmployee(formData.id)}>
                  {(!formData.id)? "Cancel?" : `Delete Employee ${formData.id}?`}
                </Link>
                }

            </div>
            
            <div className="forumRow">

            <div className="forumDiv">
                <div><label className="pl-[4px]">First Name</label></div>
                <div>
                  <input type="text" id="" placeholder="First Name..." className="pl-[4px]"
                  value={formData.firstname} 
                  onChange={handleFormChange}
                  name="firstname"
                  />
                </div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]" >Last Name</label></div>
                <div>
                  <input type="text" id="" placeholder="Last Name..." className="pl-[4px]"
                  value={formData.lastname} 
                  onChange={handleFormChange}
                  name="lastname"
                  />
                </div>
              </div>
            </div>
          </div>

          {assignmentTable}
      </div>
    </div>
  );
}
