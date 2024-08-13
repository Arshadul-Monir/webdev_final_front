import { Link, useNavigate,useParams } from "react-router-dom";
import "./Table.css"
import "../index.css"
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'
import { addTask, deleteTask, editTask } from "../store/tasksSlice";

export default function TaskSinglePage()
{
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  console.log(param.id);
  console.log(tasks);


  const taskfiltered = tasks.filter((task) => task.id == param.id)

  // I check if we already have a task with that id. 
  let task = taskfiltered[0]
  const orignalID = (param.id == "new" ? 0 : task.id);

  const [newEntry, setNewEntry] = useState(taskfiltered.length == 0 ? true : false)
  const [changeMade, setChangeMade] = useState(false)
  const [idValid, setIdValid] = useState((param.id == "new" ? false : true))
  
  if (newEntry){

    task = {
      // Evanutally we can use rand thing with our db to create unique ids
      // but don't worry about it for now.
      id: 0,
      priority: 0,
      description: "",
      owner: "",
      complete: false
    }
  }

  // const [id, setId] = useState(newEntry ? 0 : task.id)
  // const [priority, setpriority] = useState(newEntry ? 0 : task.priority)
  // const [description, setDescription] = useState(newEntry ? "" : task.description)
  // const [owner, setOwner] = useState(newEntry ? "" : task.owner)
  // const [complete, setComplete] = useState(newEntry ? false : task.complete)

  const [formData, setFormData] = useState(
  {
    id: task.id,
    priority: task.priority,
    description: task.description,
    owner: task.owner,
    complete: task.complete
  } )

  function handleFormChange(event){
    console.log(event.target.name)
    setFormData({...formData,
      [event.target.name]: event.target.value
    })

    console.log(event.target.value)
    console.log(formData)
  }

  function handleFormChangeNumber(event){
    // console.log(event)

    setFormData({...formData,
        [event.target.name]: Number(event.target.value)
    })
    setChangeMade(true);
    if (event.target.name == "id"){
      console.log("Asdfasdf");
      validateID(Number(event.target.value));
    }

  }


  const dispactchType = (newEntry == true) ? () => dispatch(addTask(formData)) : () => dispatch(editTask(formData));


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

              <Link className="nav-button" onClick={dispactchType} to={"/tasks"}>

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
                  <input type="number" id="" placeholder={0} className="pl-[4px]"
                  value={formData.priority} 
                  onChange={handleFormChangeNumber}
                  name="priority"
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



function NavigationButtons()
{
  return(
    <div id ="nav-bar " className="flex justify-evenly pb-[24px]">
        <Link className="nav-button" to={"/"}>
            Home
        </Link>
        <Link className="nav-button" to={"/employees"}>
            View All Employees
        </Link>
        <Link className="nav-button" to={"/tasks/"}>
            Back to all tasks
        </Link>
        <div className="w-[24px]"></div>
    </div>
);

}

function Validate(idObj){
  // console.log(idObj.idValid);
  if (idObj.idValid == true){
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div>
        ID not valid
      </div>
    )
  }

}