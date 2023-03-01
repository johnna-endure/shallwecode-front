import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import SignInPage from './pages/SignInPage'
import Authorized from './pages/Authorized'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
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
