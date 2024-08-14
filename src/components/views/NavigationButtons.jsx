import { Link } from "react-router-dom";

export default function NavigationButtons({
    buttonOne = "Home",
    buttonTwo = "Employees",
    buttonThree = "New_Employee"
}){
    
    
    

    return(
        <div id ="nav-bar " className="flex justify-evenly pb-[24px]">
            <SingleButton button={buttonOne}></SingleButton>

            <SingleButton button={buttonTwo}></SingleButton>
            <SingleButton button={buttonThree}></SingleButton>
            <div className="w-[24px]"></div>
        </div>
    );
}

//function that returns the html code for a button based on the string passed in 
function SingleButton({button}){
    const nameToData = 
    {
        'Home' : {
            text : 'Home',
            link : '/'
        },
        'Employees' : {
            text : 'View All Employees',
            link : '/employees'
        },
        'New_Employee' : {
            text : '+',
            link : '/employees/new'
        },
        'Return_Employees' : {
            text : 'Back to all Employees',
            link : '/employees'
        },
        'Tasks' : {
            text : 'View All Tasks',
            link : '/tasks'
        },
        'New_Task' : {
            text : '+',
            link : '/tasks/new'
        },
        'Return_Tasks' : {
            text : 'Back to all Tasks',
            link : '/tasks'
        },
    };

    const errorContent = {
        text : 'N/A',
        link : '/'
    }

    const content = nameToData[button] || errorContent;

    return(
        <Link className="nav-button" to={content.link}>
            {content.text}
        </Link>
    );
}