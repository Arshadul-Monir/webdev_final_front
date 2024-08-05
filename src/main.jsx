import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// Pages
import ErrorPage from './pages/error-page.jsx';
import Bananas from './pages/bananas.jsx';
import TaskPage from './pages/TasksAll.jsx';
import Homepage from './pages/homepage.jsx';
import Employees from './pages/employees.jsx';


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
    element: <Employees />,
    ErrorPage: <ErrorPage />
  },
  {
    path: "/banana",
    element: <Bananas />,
  },
  {
    path: "/tasks",
    element: <TaskPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  {/* <App /> */}
)
