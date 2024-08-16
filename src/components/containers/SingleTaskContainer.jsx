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
  
  const dispatch = useDispatch();

  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  //get task from state based on URL parameter
  let task = useSelector(state =>
    // Mapping then using find might be good O runtime but I don't care anymore
    state.tasks.map(task => ({
      id: task.id,
      priority: task.priority,
      description: task.description,
      employeeId: task.employeeId,
      employee: task.employee,
      isComplete: task.isComplete})
    ).find(task => task.id === taskId)
  );

  const [employeesLoad, setEmployeesLoad] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Honestly this is how I did this back in 2021, it's been over 2 years since I touched react

  // const [tasks, setTasks] = useState([]);
  // const [employees, setEmployees] = useState([]);;
  // const [task, setTask] = useState(null);

  const [formData, setFormData] = useState( 
    // This was to prevent page refresh crashing 
    (!task) ?
    {
      // id: 0,
      priority: "",
      description: "",
      employeeId: null,
      employee: null,
      isComplete: false
    } :
    (
      task
    )
  )

  function setTaskData(newTask){
    task = newTask;
  }
  
  useEffect(() => {
    // dispatch(fetchEmployees());
    // dispatch(fetchTasks());
    if (!task){
      dispatch(fetchEmployees());
      dispatch(fetchTasks());
    } else if (!isLoaded){
      setFormData(task)
      setEmployeesLoad(employees)
      setIsLoaded(true)
    }


  }, [dispatch, task, employees]);

  // I check if we already have a task with that id. 
  // console.log("filtered tasks", taskfiltered)
  // let task = taskfiltered[0]
  // console.log("Printing task", task)


  // We are spliting SingleEmployeeContainers to two files due to a bug.
  const [newEntry, setNewEntry] = useState(false)
  
  // this is if we want to highlight the save button if changes are made (optional and not implemented yet)
  const [changeMade, setChangeMade] = useState(false)


  // Validations
  // NO LONGER NEEDED HERE
  // let onLoadId = (task == undefined) ? 0 : task.id
  // const orignalID = (param.taskId == "new" ? 0 : onLoadId);
  // const [idValid, setIdValid] = useState((param.taskId == "new" ? false : true))
  // const [descriptionValid, setDescriptionValid] = useState(false)


    function handleFormChange(event){
      // console.log(event)
      setFormData({...formData,
          [event.target.name]: event.target.value
      })
      setChangeMade(true);
    }
  
    function handleFormChangeNumber(event){
      //console.log(event)
      setFormData({...task,
          [event.target.name]: Number(event.target.value)
      })
      setChangeMade(true);
      // if (event.target.name == "id"){
      //   //console.log("Asdfasdf");
      //   validateID(Number(event.target.value));
      // }
  
    }
  
    const dispactchType = (newEntry == true) ? () => dispatch(addTask(formData)) : () => dispatch(editTask(formData));


  // if (!isLoaded) return <h2>Loading... or maybe you do not have access to this post.</h2>
  // else {
  return ( 

        <SingleTaskView 
          task={task} 
          tasks = {tasks} // we prob don't need this one, if i was better at coding. 
          employees = {employeesLoad} // I'm using employeesload incase the user moves around the site too fast.
          dispactchType={dispactchType} 

          deleteTask={() => dispatch(deleteTask(task))}

          formData={formData}
          setFormData={setFormData} // This is actually not being used
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}

          // Validations related
          changeMade={changeMade}
          />
        )
  // }
}

export default SingleTaskContainer;