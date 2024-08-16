import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"
import "./styles/tailwindStyle.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'
import NavigationButtons from "./NavigationButtons";
import { deleteEmployee } from "../../store/employeesSlice";

export default function SingleEmployeeView({
  employee,
  tasks,
  dispactchType,
  formData,
  handleFormChange,
  handleFormChangeNumber,
  changeMade
})
{
  function ValidateWarningText(){
    // document.getElementsByClassName("nav-button").disabled = true;
    const check1 = (formData.first_name == "")
    const check2 = (formData.last_name == "")
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
    if (changeMade){
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
                      {(!employee.id)? "New Employee!" : `Edit Employee ${employee.id}!`}
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

                <Link className="nav-button" to={"/employees"} 
                onClick={(!employee.id)? () => null : deleteEmployee(employee.id)}>
                  {(!employee.id)? "Cancel?" : `Delete Employee ${employee.id}?`}
                </Link>
            </div>
            
            <div className="forumRow">

            <div className="forumDiv">
                <div><label className="pl-[4px]">First Name</label></div>
                <div>
                  <input type="text" id="" placeholder="First Name..." className="pl-[4px]"
                  value={formData.first_name} 
                  onChange={handleFormChange}
                  name="first_name"
                  />
                </div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]" >Last Name</label></div>
                <div>
                  <input type="text" id="" placeholder="Last Name..." className="pl-[4px]"
                  value={formData.last_name} 
                  onChange={handleFormChange}
                  name="last_name"
                  />
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
