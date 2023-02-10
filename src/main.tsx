import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>
)
