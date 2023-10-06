import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Applied_Jobs from './Components/AppliedJobs/Applied_Jobs';
import Jobs from './Components/Jobs/Jobs';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
import Login from './Components/LogIn/Login';
import Register from './Components/LogIn/Register.jsx/Register';
import AuthProvider from './Firebase/AuthProvider';
import PrivateRoute from './PrivateRoutes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied_Jobs></Applied_Jobs>,
        loader: () => fetch("../jobs.json"),/* do not load all data only load what i need */
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/stat",
        element: <Statistics></Statistics>
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: () => fetch("../jobs.json"),/* do not load all data only load what i need */
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
