import { Link } from "react-router-dom";

export default function Homepage() {

    return (
      <div id="home-page" className="flex h-screen">
        <div className="m-auto"> 
          <div id="greeting">
            WELCOME TO THE WEB DEV TASK TRACKER
          </div>
          <div id="home-btns">
            <Link to="/employees">
                <button id="employee-btn">
                    View All Employees
                </button>
            </Link>
            
            <Link to="/tasks">
                <button id="tasks-btn">
                    View All Tasks
                </button>
            </Link>
          </div>
        </div>

      </div>
    );
  }