import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask } from "../../store/tasksSlice";


import SingleTaskView from '../views/SingleTaskView';

function SingleTaskContainer() {
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  // console.log(tasks);
  const disp = useDispatch();

  useEffect(()=>{
      disp(fetchTasks());
  },[disp]);

  // console.log(param.id);
  // console.log(tasks);

  const taskfiltered = tasks.filter((task) => task.id == param.id)

  // I check if we already have a task with that id. 
  console.log(taskfiltered)
  let task = taskfiltered[0]


  let onLoadId = (task == undefined) ? 0 : task.id
  const orignalID = (param.id == "new" ? 0 : onLoadId);

  const [newEntry, setNewEntry] = useState(taskfiltered.length == 0 ? true : false)
  const [changeMade, setChangeMade] = useState(false)

  // Validations
  const [idValid, setIdValid] = useState((param.id == "new" ? false : true))
  const [descriptionValid, setDescriptionValid] = useState(false)
  
  if (newEntry){

    task = {
      // Evanutally we can use rand thing with our db to create unique ids
      // but don't worry about it for now.
      id: 0,
      priority: "",
      description: "",
      owner: "",
      complete: false
    }
  }

  const [formData, setFormData] = useState(
    (task == undefined) ? {
      id: 0,
      priority: "",
      description: "",
      owner: "",
      complete: false
    } :
    {
      id: task.id,
      priority: task.priority,
      description: task.description,
      owner: task.owner,
      complete: task.complete
    } 
  )

    function handleFormChange(event){
      console.log(event)
      setFormData({...formData,
          [event.target.name]: event.target.value
      })
      setChangeMade(true);
    }
  
    function handleFormChangeNumber(event){
      //console.log("@", event)
      setFormData({...formData,
          [event.target.name]: Number(event.target.value)
      })
      setChangeMade(true);
      if (event.target.name == "id"){
        //console.log("Asdfasdf");
        validateID(Number(event.target.value));
      }
  
    }
  
    const dispactchType = (newEntry == true) ? () => dispatch(addTask(formData)) : () => dispatch(editTask(formData));
    // const dispactchType = () => dispatch(editTask(formData));

  return <SingleTaskView task={task} dispactchType={dispactchType} 
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}
          />
}

export default SingleTaskContainer;