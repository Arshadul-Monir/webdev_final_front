import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"
import "../index.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'

export default function EmployeesSinglePage()
{
  const param = useParams();


  console.log(param.id);

  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const emplfiltered = employees.filter((empl) => empl.id == param.id)

  // I check if we already have a employee with that id. 
  let empl = emplfiltered[0]

  const [newEntry, setNewEntry] = useState(emplfiltered.length == 0 ? true : false)
  
  if (newEntry){
    empl = {
      // Evanutally we can use rand thing with our db to create unique ids
      // but don't worry about it for now.
      id: 0,
      first_name: "",
      last_name: "",
      department: "",
      task: ""
    }
  }

  const [formData, setFormData] = useState(
  {
    id: empl.id,
    first_name: empl.first_name,
    last_name: empl.last_name,
    department: empl.department,
    task: empl.task
  })

  function handleFormChange(event){
    console.log(event)
    setFormData({...formData,
        [event.target.name]: event.target.value
    })
  }

  function handleFormChangeNumber(event){
    console.log(event)
    setFormData({...formData,
        [event.target.name]: Number(event.target.value)
    })
  }

  const dispactchType = (newEntry == true) ? 'add_empl' : 'edit_empl'

  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons ></NavigationButtons>

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
                <div><label className="pl-[4px]">First Name</label></div>
                <div>
                  <input type="number" id="" placeholder={0} className="pl-[4px]"
                  value={formData.first_name} 
                  onChange={handleFormChange}
                  name="first_name"
                  >
                </input></div>
              </div>

              <button className="nav-button">
                Delete
              </button>
            </div>

            <div className="forumRow">
              <div className="forumDiv">
                <div><label className="pl-[4px]" >Last Name</label></div>
                <div>
                  <input type="text" id="" placeholder="Description..." className="pl-[4px]"
                  value={formData.last_name} 
                  onChange={handleFormChange}
                  name="last_name"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Department</label></div>
                <div>
                  <input type="text" id="" placeholder="Owner..." className="pl-[4px]"
                  value={formData.department} 
                  onChange={handleFormChange}
                  name="department"
                  >
                </input></div>
              </div>

              <div className="forumDiv">
                <div><label className="pl-[4px]">Task</label></div>
                <div>
                  <select id="" className="pl-[4px] w-[180px]"
                  value={formData.task} 
                  onChange={handleFormChange}
                  name="task"
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
        <Link className="nav-button" to={"/bananas"}>
            balls
        </Link>
        <Link className="nav-button" to={"/employees/"}>
            Back to all employees
        </Link>
        <div className="w-[24px]"></div>
    </div>
);
}