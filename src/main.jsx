import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';
import './index.css'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

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
        // children: [
        //     {
        //         path: "login",
        //         element: <Login/>,
        //         errorElement: <ErrorPage/>,
        //     },
        //     {
        //         path: "signup",
        //         element: <SignUp/>,
        //         errorElement: <ErrorPage/>,
        //     },
        // ]

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
