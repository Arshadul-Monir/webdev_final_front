import AllEmployeesView from "../views/AllEmployeesView";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/employeesSlice";

function AllEmployeesContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(fetchEmployees());

        // My lazy way of making sure new info is not missed without doing a 
        // real frontend data update function.
        if (!isLoaded){
          setTimeout(1000); // reloads info after 1 sec
          setIsLoaded(true)
        }


      }, [dispatch, isLoaded]);
    
    return (
      <AllEmployeesView employees={employees} dispatch={dispatch} />
    );

}

export default AllEmployeesContainer;