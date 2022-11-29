import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './index.css'
import Login from './pages/login-page';
import SignUp from './pages/signup-page';
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "login",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "signup",
    element: <SignUp/>,
    errorElement: <ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
