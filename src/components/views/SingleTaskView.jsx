import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"

import { useSelector, useDispatch  } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask } from "../../store/tasksSlice";

import "./styles/tailwindStyle.css"

export default function SingleTaskView({
  task, 
  tasks, 
  employees, 
  dispactchType,
  formData,
  setFormData, // This is actually not being used
  handleFormChange,
  handleFormChangeNumber



})
{

  console.log("On single Task view", task)
  // console.log(tasks)
  // console.log(employees)

  function validateID(idnumber){
    if (idnumber == 0){
      setIdValid(false);
      return;
    }
    if (idnumber == orignalID) {
      setIdValid(true);
      return;
    } 
    let taskfiltered2 = tasks.filter((task) => task.id == idnumber)
    if (taskfiltered2.length == 0){
        setIdValid(true); 
    } else {
        setIdValid(false);
    }


  }


  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons ></NavigationButtons>

          <div className="forumCol">
            <div className="flex justify-end">

              <Link type="button" className="nav-button" onClick={dispactchType} to={"/tasks"}>

                Save 
              </Link>

            </div>

            {/* Middle Row */}
            <div className="forumRow">
              <div className="forumDiv">
                <div><label className="pl-[4px]" >id</label></div>
                <div>
                  <input type="number" id="" placeholder={0} className="pl-[4px]"
                  disabled 
                  value={formData.id} 
                  onChange={handleFormChangeNumber}
                  name="id"
                  >
                </input></div>
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

              <button className="nav-button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
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
                      
                      let option = (emp.id == task.employeeId) ? 
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
                  value={formData.complete} 
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



function NavigationButtons()
{
  return(
    <div id ="nav-bar " className="flex justify-evenly pb-[24px]">
        <Link className="nav-button" to={"/"}>
          Home
        </Link>
        <Link className="nav-button" to={"/employees"}>
            Employees
        </Link>
        <Link className="nav-button" to={"/tasks/"}>
            Back to all tasks
        </Link>
        <div className="w-[24px]"></div>
    </div>
);

}

function Validate(idObj){
  const iddiv = (idObj.idValid == true) ?( <div></div> ) : (<div> ID not valid </div>)

  return ( 
        <div>
          <ValidateIDDiv obj = {idObj}></ValidateIDDiv>
        </div>
  )

}

function ValidateIDDiv(idObj){
  const iddiv = (idObj.idValid == true) ?( <div></div> ) : (<div> ID not valid </div>)

  return (iddiv)
}