import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchEmployees, addEmployee, deleteEmployee, editEmployee } from "../../store/employeesSlice";
import { fetchTasks } from "../../store/tasksSlice";

import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer(){
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  const employees = useSelector((state) => state.employees);
  
  const dispatch = useDispatch();

  let { employeeID } = useParams(); //get id from URL
  employeeID = parseInt(employeeID); //convert to integer


  let employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeID)
  );

  //hard coded rn cuz it's not working yet
  const employee_kyle = employees.find(emp => emp.id === 1);

  const [tasksLoad, setTasksLoad] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);



  // KYLEEEEEE
  const [availableTasks, setAvailableTasks] = useState((employee) ? tasks.filter(task => !task.employee && !task.isComplete): []);
  const [employeeTasks, setEmployeeTasks] = useState((employee) ? employee.tasks : []);


  function handleTasksChange( addOrRemove, task){
    // Add will be true
    if (addOrRemove){
      setEmployeeTasks(employeeTasks => [...employeeTasks, task] )
      setAvailableTasks( availableTasks => availableTasks.filter(t => t.id !== task.id ))
    } else { // removing
      setEmployeeTasks(employeeTasks => employeeTasks.filter(t => t.id !== task.id ))
      setAvailableTasks( availableTasks => [...availableTasks, task] )
    }
    dispatch(fetchTasks());
    setIsLoaded(false);
  }


  useEffect(() => {
    if (!employee){
      // console.log("asdfasdf")
      console.log(employeeID, employee)
      dispatch(fetchEmployees());
      dispatch(fetchTasks());
    } else if (!isLoaded){
      // console.log("test")
      setFormData(employee)
      setTasksLoad(tasks)
      setAvailableTasks(tasks.filter(task => !task.employee && !task.isComplete));
      setEmployeeTasks(employee.tasks);
      setIsLoaded(true)
    }

  }, [dispatch, employee]);

  

  useEffect(() => {
    // dispatch(fetchEmployees());
    // dispatch(fetchTasks());

  }, [availableTasks, employeeTasks]);


  const [newEntry, setNewEntry] = useState(false)
  
  // this is if we want to highlight the save button if changes are made (optional and not implemented yet)
  const [changeMade, setChangeMade] = useState(false)
  
  if (newEntry){
    employee = {
      // Here we have a default value of zero if there are no employees 
      // or we take the largest id value then add one.
      //id: (tasks.length == 0) ? 0 : (Math.max(...tasks.map(o => o.id)) + 1),
      first_name: "",
      last_name: "",
      department: "",
      tasks: []
    }
  }

  const [formData, setFormData] = useState(
    // This was to prevent page refresh crashing
    (employee == undefined) ? {
      id: 0,
      firstname: "",
      lastname: "",
      department: "",
      tasks: [],
    } :
    {
      id: employee.id,
      firstname: employee.first_name,
      lastname: employee.last_name,
      department: employee.department,
      tasks: employee.tasks,
    }
  )

  function handleFormChange(event){
    // console.log(event)
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
    // if (event.target.name == "id"){
    //   //console.log("Asdfasdf");
    //   validateID(Number(event.target.value));
    // }
  }

  const dispactchType = (newEntry == true) ? () => dispatch(addEmployee(formData)) : () => dispatch(editEmployee(formData));

  return <SingleEmployeeView 
          employee={employee}
          // tasks={tasks}
          dispactchType={dispactchType} 
          deleteEmployee={() => dispatch(deleteEmployee(formData))}

          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}
          
          changeMade={changeMade}

          //AssignmentTable stuff
          newEntry={newEntry}
          dispatch={dispatch}
          tasks={tasksLoad}
          employee_kyle = {employee_kyle}
          // Kyle these 4 are mines
          availableTasks= {availableTasks}
          employeeTasks = {employeeTasks}
          handleTasksChange= {handleTasksChange}
          // setAvailableTasks = {setAvailableTasks}
          // setEmployeeTasks = {setEmployeeTasks}

    />
}

export default SingleEmployeeContainer