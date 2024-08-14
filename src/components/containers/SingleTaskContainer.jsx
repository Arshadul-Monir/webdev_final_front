import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask,  } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";

import SingleTaskView from '../views/SingleTaskView';

function SingleTaskContainer() {
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  const employees = useSelector((state) => state.employees);
  
  // console.log(tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchTasks());
  }, [dispatch]);





  const taskfiltered = tasks.filter((task) => task.id == param.taskId)

  // I check if we already have a task with that id. 
  // console.log("filtered tasks", taskfiltered)
  let task = taskfiltered[0]
  // console.log("Printing task", task)

  const [newEntry, setNewEntry] = useState(taskfiltered.length == 0 ? true : false)
  
  // this is if we want to highlight the save button if changes are made (optional and not implemented yet)
  const [changeMade, setChangeMade] = useState(false)

  // Validations
  // NO LONGER NEEDED HERE
  // let onLoadId = (task == undefined) ? 0 : task.id
  // const orignalID = (param.taskId == "new" ? 0 : onLoadId);
  // const [idValid, setIdValid] = useState((param.taskId == "new" ? false : true))
  // const [descriptionValid, setDescriptionValid] = useState(false)
  
  if (newEntry){
    // console.log("tasks in newEntry ",tasks);
    task = {
      // Here we have a default value of zero if there are no tasks 
      // or we take the largest id value then add one.
      id: (tasks.length == 0) ? 0 : (Math.max(...tasks.map(o => o.id)) + 1),
      priority: "Low",
      description: "",
      employeeId: null,
      employee: null,
      isComplete: false
    }
  }

  const [formData, setFormData] = useState(
    // This was to prevent page refresh crashing 
    (task == undefined) ? {
      id: 0,
      priority: "",
      description: "",
      employeeId: null,
      employee: null,
      isComplete: false
    } :
    {
      id: task.id,
      priority: task.priority,
      description: task.description,
      employeeId: task.employeeId,
      employee: task.employee,
      isComplete: task.isComplete
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

  return <SingleTaskView 
          task={task} 
          tasks = {tasks} // we prob don't need this one, if i was better at coding. 
          employees = {employees}
          dispactchType={dispactchType} 

          formData={formData}
          setFormData={setFormData} // This is actually not being used
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}


          />
}

export default SingleTaskContainer;