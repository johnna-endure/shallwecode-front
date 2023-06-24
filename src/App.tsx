import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import SigninPage from './pages/SigninPage'
import Authorized from './pages/Authorized'
import Test from './Test'
import SignupPage from './pages/SignupPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Test />,
  },

  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
  {
    path: '/authorized/github',
    element: <Authorized />,
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
