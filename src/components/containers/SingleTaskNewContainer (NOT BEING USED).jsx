import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'

import SingleTaskView from '../views/SingleTaskView';

function SingleTaskNewContainer() {


  let task = {
      id: 0,
      priority: "",
      description: "",
      owner: "",
      complete: false
  }

  const [formData, setFormData] = useState(
    {
      id: task.id,
      priority: task.priority,
      description: task.description,
      owner: task.owner,
      complete: task.complete
    } )

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
    

  return <SingleTaskView task={task} dispactchType={dispactchType} 
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormChangeNumber={handleFormChangeNumber}
          />
}

export default SingleTaskNewContainer;