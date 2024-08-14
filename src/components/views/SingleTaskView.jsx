import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"

import { useSelector, useDispatch  } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask } from "../../store/tasksSlice";

import "./styles/tailwindStyle.css"

import NavigationButtons from "./NavigationButtons";

export default function SingleTaskView({task, dispactchType,
  formData,
  setFormData,
  handleFormChange,
  handleFormChangeNumber})
{

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
          <NavigationButtons buttonTwo="Employees" buttonThree="Return_Tasks"></NavigationButtons>

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
                  value={formData.id} 
                  onChange={handleFormChangeNumber}
                  name="id"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Priority Level</label></div>
                <div>
                  <input type="text" id="" placeholder={0} className="pl-[4px]"
                  value={formData.priority} 
                  onChange={handleFormChange}
                  name="priority_lvl"
                  >
                </input></div>
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
                  <input type="text" id="" placeholder="Owner..." className="pl-[4px]"
                  value={formData.owner} 
                  onChange={handleFormChange}
                  name="owner"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Complete Status</label></div>
                <div>
                  <select id="" className="pl-[4px] w-[180px]"
                  value={formData.complete} 
                  onChange={handleFormChange}
                  name="complete"
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