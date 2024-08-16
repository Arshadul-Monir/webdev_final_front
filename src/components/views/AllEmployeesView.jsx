import "./Table.css"
import "./styles/tailwindStyle.css"
import EmployeeList from "./EmployeeList.jsx";
import NavigationButtons from "./NavigationButtons";

export default function AllEmployeesView({ employees, dispatch })
{
   return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons buttonOne="Home" buttonTwo="Tasks" buttonThree="New_Employee"></NavigationButtons>
                <EmployeeList pEmployees={employees} dispatch={dispatch}></EmployeeList>
            </div>

        </div>
    );
}
