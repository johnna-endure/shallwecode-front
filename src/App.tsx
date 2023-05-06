import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import SignInPage from './pages/SignInPage'
import Authorized from './pages/Authorized'
import SignUpPage from './pages/SignUpPage'
import Test from "./Test";

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Test/>,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/authorized/github',
    element: <Authorized />,
  },

  {
    path: '/',
    element: <IndexPage />,
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
