import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchTasks, addTask, deleteTask, editTask,  } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";

import SingleTaskView from '../views/SingleTaskView';

function NewTaskContainer() {
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  const employees = useSelector((state) => state.employees);
  
  // console.log(tasks);
  const dispatch = useDispatch();

  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  //get task from state based on URL parameter
  // THis is no longer being used after I split the files to view single task and new task
  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  );

  // Honestly this is how I did this back in 2021, it's been over 2 years since I touched react

  const [formData, setFormData] = useState( 
    // This was to prevent page refresh crashing 
    {
      // id: 0,
      priority: "",
      description: "",
      employeeId: null,
      employee: null,
      isComplete: false
    } 
  )

  
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchTasks());


  }, [dispatch]);

  // I check if we already have a task with that id. 
  // console.log("filtered tasks", taskfiltered)
  // let task = taskfiltered[0]
  // console.log("Printing task", task)

  // We are spliting SingleEmployeeContainers to two files due to a bug.
  const [newEntry, setNewEntry] = useState( true)
  
  // this is if we want to highlight the save button if changes are made (optional and not implemented yet)
  const [changeMade, setChangeMade] = useState(false)

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

  
    }
  
    const dispactchType = (newEntry == true) ? () => dispatch(addTask(formData)) : () => dispatch(editTask(formData));
    // const dispactchType = () => dispatch(editTask(formData));

  return ( 
        <SingleTaskView 
          task={task} 
          tasks = {tasks} // we prob don't need this one, if i was better at coding. 
          employees = {employees}
          dispactchType={dispactchType} 
          deleteTask={() => dispatch(deleteTask(formData))}

          formData={formData}
          setFormData={setFormData} // This is actually not being used
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}

          // Validations related
          changeMade={changeMade}
          />
        )
}

export default NewTaskContainer;