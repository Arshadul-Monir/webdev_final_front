import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"
import "./styles/tailwindStyle.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'
import NavigationButtons from "./NavigationButtons";

export default function SingleEmployeeView({empl, dispactchType,
  formData,
  setFormData,
  handleFormChange,
  handleFormChangeNumber})
{

  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons buttonTwo="Tasks" buttonThree="Return_Employees"b></NavigationButtons>

          <div className="forumCol">
            <div className="flex justify-end">

              <button className="nav-button" onClick={() => dispatch({ type: dispactchType, newItem: formData })} to={"/employees"}>
                Save
              </button>
            </div>

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
                <div><label className="pl-[4px]">Department</label></div>
                <div>
                  <input type="text" id="" placeholder="Department..." className="pl-[4px]"
                  value={formData.department} 
                  onChange={handleFormChange}
                  name="department"
                  >
                </input></div>
              </div>


              <button className="nav-button">
                Delete
              </button>
            </div>
            <div className="forumRow">

            <div className="forumDiv">
                <div><label className="pl-[4px]">First Name</label></div>
                <div>
                  <input type="text" id="" placeholder="First Name..." className="pl-[4px]"
                  value={formData.first_name} 
                  onChange={handleFormChange}
                  name="first_name"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]" >Last Name</label></div>
                <div>
                  <input type="text" id="" placeholder="Last Name..." className="pl-[4px]"
                  value={formData.last_name} 
                  onChange={handleFormChange}
                  name="last_name"
                  >
                </input></div>
              </div>


            </div>
          </div>

      </div>
    </div>
  );
}
