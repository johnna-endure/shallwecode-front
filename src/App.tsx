import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import SigninPage from './pages/SigninPage'
import Authorized from './pages/Authorized'
import Test from './Test'

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  // {
  //   path: '/signup',
  //   element: <SignUpPage />,
  // },
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
