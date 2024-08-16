import { Link, useNavigate,useParams } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { useState } from 'react'


import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer(){

  const param = useParams();
  console.log(param.id);

  const employees = useSelector(state => state.employees);
  const tasks = useSelector(state => state.tasks);
  const employee_kyle = employees.find(emp => emp.id === 2);
  
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

  return <SingleEmployeeView empl={empl} dispactchType={dispactchType} 
    formData={formData}
    setFormData={setFormData}
    handleFormChange={handleFormChange}
    handleFormChangeNumber={handleFormChangeNumber}
    
    //AssignmentTable stuff
    dispatch={dispatch}
    tasks={tasks}
    employee_kyle = {employee_kyle}
    >



    </SingleEmployeeView>
}

export default SingleEmployeeContainer