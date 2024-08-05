import { Link, useNavigate,useParams } from "react-router-dom";
import "./TasksAll.css"
import "../index.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'

export default function TaskSinglePage()
{
  const param = useParams();


  console.log(param.id);

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const taskfiltered = tasks.filter((task) => task.id == param.id)

  // I check if we already have a task with that id. 
  let task = taskfiltered[0]

  const [newEntry, setNewEntry] = useState(taskfiltered.length == 0 ? true : false)
  
  if (newEntry){
    task = {
      // Evanutally we can use rand thing with our db to create unique ids
      // but don't worry about it for now.
      id: 0,
      priority_lvl: 0,
      description: "",
      owner: "",
      complete: false
    }
  }

  // const [id, setId] = useState(newEntry ? 0 : task.id)
  // const [priority_lvl, setPriority_lvl] = useState(newEntry ? 0 : task.priority_lvl)
  // const [description, setDescription] = useState(newEntry ? "" : task.description)
  // const [owner, setOwner] = useState(newEntry ? "" : task.owner)
  // const [complete, setComplete] = useState(newEntry ? false : task.complete)

  const [formData, setFormData] = useState(
  {
    id: task.id,
    priority_lvl: task.priority_lvl,
    description: task.description,
    owner: task.owner,
    complete: task.complete
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

  const dispactchType = (newEntry == true) ? 'add_task' : 'edit_task'

  return(
    <div className="h-screen w-full flex justify-center ">
      <div className="contextDiv">
          <NavigationButtons ></NavigationButtons>

          <div className="forumCol">
            <div className="flex justify-end">

              <button className="nav-button" onClick={() => dispatch({ type: dispactchType, newItem: formData })}>
                Save
              </button>
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
                  <input type="number" id="" placeholder={0} className="pl-[4px]"
                  value={formData.priority_lvl} 
                  onChange={handleFormChangeNumber}
                  name="priority_lvl"
                  >
                </input></div>
              </div>

              <button className="nav-button">
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

// function FilloutTasks(){
//   console.log(des);
//   return (
//   <div>
//     <div>enter/save row</div>
//     <div>first info row
//       <label for="lname">Last Name</label>
//       <input type="text" id="fname" name="firstname" placeholder="Your name.." value={des} onchange={setDes}>
//       </input>
//     </div>
//     <div>2nd info row</div>
//   </div>
//   )
// }

function NavigationButtons()
{
  return(
    <div id ="nav-bar " className="flex justify-evenly pb-[24px]">
        <Link className="nav-button" to={"/banana"}>
            fuck
        </Link>
        <Link className="nav-button" to={"/"}>
            balls
        </Link>
        <Link className="nav-button" to={"/tasks/"}>
            Back to all tasks
        </Link>
        <div className="w-[24px]"></div>
    </div>
);
}