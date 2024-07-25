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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorPage: <ErrorPage />
  },
  {
    path: "/banana",
    element: <Bananas />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
