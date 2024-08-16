import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { fetchEmployees, addEmployee, deleteEmployee, editEmployee } from "../../store/employeesSlice";
import { fetchTasks } from "../../store/tasksSlice";

import SingleEmployeeView from '../views/SingleEmployeeView';

function NewEmployeeContainer(){
  const param = useParams();

  const tasks = useSelector(state => state.tasks);
  const employees = useSelector((state) => state.employees);
  
  //hard coded rn cuz it's not working yet
  const employee_kyle = employees.find(emp => emp.id === 1);
  
  const dispatch = useDispatch();

  // const [tasksLoad, tasksLoadLoad] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchTasks());

    // My lazy way of making sure new info is not missed without doing a 
    // real frontend data update function.
    if (!isLoaded){
      setTimeout(1000); // reloads info after 1 sec
      setIsLoaded(true)
    }

  }, [dispatch, isLoaded]);

  const employeefiltered = employees.filter((employee) => employee.id == param.emplId)

  let employee = employeefiltered[0];

  // We are spliting SingleEmployeeContainers to two files cuz im lazy. 
  const [newEntry, setNewEntry] = useState(true)
  
  // this is if we want to highlight the save button if changes are made (optional and not implemented yet)
  const [changeMade, setChangeMade] = useState(false)
  
  if (newEntry){
    employee = {
      // Here we have a default value of zero if there are no employees 
      // or we take the largest id value then add one.
      //id: (tasks.length == 0) ? 0 : (Math.max(...tasks.map(o => o.id)) + 1),
      firstname: "",
      lastname: "",
      department: "",
      // tasks: []
    }
  }

  const [formData, setFormData] = useState(
  {
      firstname: "",
      lastname: "",
      department: "",
      // tasks: [],
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
          dispatch={dispatch}
          tasks={tasks} // tasksLoad
          employee_kyle = {employee_kyle}
    />
}

export default NewEmployeeContainer