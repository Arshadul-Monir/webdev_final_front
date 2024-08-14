import AllEmployeesView from "../views/employees";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/employeesSlice";

function AllEmployeesContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    // const deleteDispatch = (employeeID) => dispatch(deleteEmployee(employeeID));

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);
    
    return (
       <AllEmployeesView employees={employees}  />
    );

}

export default AllEmployeesContainer;