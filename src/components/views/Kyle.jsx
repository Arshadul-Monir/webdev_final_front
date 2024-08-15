import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import AssignmentTable from "./AssignmentTable";

import { fetchTasks } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";


export default function Kyle() 
{

  const tasks = useSelector(state => state.tasks);
  const employees = useSelector((state) => state.employees);
  const employee = employees.find(emp => emp.id === 2);
  
  console.log(employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchTasks());
  }, [dispatch]);

  
  if(!employee)
  {
    return(<div></div>);
  }
  else
  {  
    return (
      <div >

        <AssignmentTable
            employee={employee}
            tasks={tasks}
            dispatch={dispatch}
        ></AssignmentTable>
      </div>
    );
  }
}