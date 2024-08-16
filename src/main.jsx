import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// Pages
import ErrorPage from './components/views/error-page.jsx';
import Homepage from './components/views/homepage.jsx';
import Bananas from './components/views/bananas.jsx';

// Pages that require containers 
import AllEmployeesContainer from './components/containers/AllEmployeesContainer.jsx';
import AllTasksContainer from './components/containers/AllTasksContainer.jsx';
import SingleTaskContainer from './components/containers/SingleTaskContainer.jsx';
import SingleEmployeeContainer from './components/containers/SingleEmployeeContainer.jsx';
import NewTaskContainer from './components/containers/NewTaskContainer.jsx';
import NewEmployeeContainer from './components/containers/NewEmployeeContainer.jsx';

// //Redux
import { Provider } from "react-redux";
import store from "./store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    ErrorPage: <ErrorPage />
  },
  {
    path: "/employees",
    element: <AllEmployeesContainer  />,
  },
  {
    path: "/tasks",
    element: <AllTasksContainer/>
  },

  // {
  //   path: "/banana",
  //   element: <Bananas />,
  // },
  {
    path: "/employees/:employeeID",
    element: <SingleEmployeeContainer />,
  },
  {
    path: "/employees/new",
    element: <NewEmployeeContainer />,
  },
  {
    path: "/tasks/:taskId",
    element: <SingleTaskContainer />
  },
  ,
  {
    path: "/tasks/new",
    element: <NewTaskContainer />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  //  <App /> 
)
