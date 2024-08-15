import "./Table.css"
import "./styles/tailwindStyle.css"
import TaskList from "./TaskList";
import NavigationButtons from "./NavigationButtons";

export default function AllTasksView({ tasks, dispatch })
{
   return(
        <div className="h-screen w-full flex justify-center ">
            <div className="contextDiv">
                <NavigationButtons buttonOne="Home" buttonTwo="Employees" buttonThree="New_Task"></NavigationButtons>
                <TaskList pTasks={tasks} dispatch={dispatch}></TaskList>
            </div>

        </div>
    );
}
