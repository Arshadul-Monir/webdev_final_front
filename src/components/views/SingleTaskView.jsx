import { Link, useLocation, useNavigate,useParams } from "react-router-dom";
import "./Table.css"

import { useSelector, useDispatch  } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask } from "../../store/tasksSlice";
import NavigationButtons from "./NavigationButtons";

import "./styles/tailwindStyle.css"

export default function SingleTaskView({
  task, 
  tasks, // This is actually not being used
  employees, // This is a copy of employees after it's been loaded
  dispactchType,
  formData,
  setFormData, // This is actually not being used
  handleFormChange,
  handleFormChangeNumber,

  changeMade

})
{
  function ValidateWarningText(){
    const check1 = (formData.description.length == "")
    const check2 = (formData.employeeId == null)
    if (changeMade && check1 && check2 ){
      return <div className="text-red-600"> Warning No Description or Employee assigned</div>
    } else if (changeMade && check1){
      return <div className="text-red-600"> Warning No Description</div>
    } else if (changeMade && check2){
      return <div className="text-red-600"> Warning No Employee assigned</div>
    } else {
      return <div></div>
    }
  }

  function BackOrSaveBtn(){
    const check1 = (formData.description.length == "")
    const navigate = useNavigate();
    if (changeMade &&  !check1){
      return (
      
        <div type="button" className="nav-button" onClick={() => {navigate(-1); dispactchType();}}>
          Save 
        </div>
      )
    } else {
      return (
        <div type="button" className="nav-button" onClick={() => navigate(-1)}>
        Back 
      </div>
      )
    }
  }




  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons buttonTwo="Employees" buttonThree="Return_Tasks"></NavigationButtons>

          <div className="forumCol">
            <div className="flex justify-end">
              <ValidateWarningText></ValidateWarningText>
              <BackOrSaveBtn ></BackOrSaveBtn>
            </div>

            {/* Middle Row */}
            <div className="forumRow">
              <div className="forumDiv">
                <div><label className="pl-[4px]" >id</label></div>
                <div>
                  <p style={{textAlign:"left", paddingLeft:"50px"}}> 
                    {(!formData.id)? "New Task!" : `Edit task ${formData.id}!`}
                  </p>
                </div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Priority Level</label></div>
                <div>
                  <select  id="" placeholder={"Low"} className="pl-[4px]"
                  value={formData.priority} 
                  onChange={handleFormChange}
                  name="priority"
                  >
                  <option value={"Low"}> Low </option>
                  <option value={"Medium"}> Medium </option>
                  <option value={"High"}> High </option>
                </select></div>
              </div>

              <Link className="nav-button" to={"/tasks"} 
              onClick={(!formData.id)? () => null : deleteTask(formData.id)}>
                {(!formData.id)? "Cancel?" : `Delete task ${formData.id}?`}
              </Link>
            </div>

            {/* Last row */}
            <div className="forumRow">
              <div className="forumDiv">
                <div><label className="pl-[4px]" >Description</label></div>
                <div>
                  <input type="text" id="" placeholder="Description..." className="pl-[4px]"
                  value={formData.description} 
                  onChange={handleFormChange}
                  name="description"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Owner</label></div>
                <div>
                  <select name="employeeId" 
                    onChange={handleFormChangeNumber}>
                    <option value="null">None</option>
                    {employees.map(emp => {
                      let name = emp.firstname + " " + emp.lastname;
                      
                      let option = (emp.id == formData.employeeId) ? 
                          <option selected key={emp.id} value={emp.id}>{name}</option> 
                          : <option key={emp.id} value={emp.id}>{name}</option> 
                      return option
                      
                      ;
                    })}
                  </select>
                </div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Complete Status</label></div>
                <div>
                  <select id="" className="pl-[4px] w-[180px]"
                  value={formData.isComplete} 
                  onChange={handleFormChange}
                  name="isComplete"
                  >
                    <option value={false}> Incomplete </option>
                    <option value={true}> Complete </option>
                </select></div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}