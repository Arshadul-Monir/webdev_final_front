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

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchTasks());
  }, [dispatch]);

  const employeefiltered = employees.filter((employee) => employee.id == param.employeeId)

  let employee = employeefiltered[0];

  const [newEntry, setNewEntry] = useState(employeefiltered.length == 0 ? true : false)
  
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
      first_name: "",
      last_name: "",
      department: "",
      tasks: [],
    } :
    {
      id: employee.id,
      first_name: employee.first_name,
      last_name: employee.last_name,
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
          tasks={tasks}
          dispactchType={dispactchType} 
          deleteEmployee={() => dispatch(deleteEmployee(formData))}

          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}
          
          changeMade={changeMade}
    />
}

export default SingleEmployeeContainer