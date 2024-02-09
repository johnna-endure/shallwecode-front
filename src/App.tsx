import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthorizedOAuth2Page } from './pages/AuthorizedOAuth2Page'
import { LoginPage } from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/authorized',
    element: <AuthorizedOAuth2Page />,
  },
])

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
