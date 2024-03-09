import React from 'react'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { RootPage } from './pages/RootPage'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthorizedOAuth2Page } from './pages/AuthorizedOAuth2Page'
import { LoginPage } from './pages/LoginPage'
import { IndexPage } from './pages/IndexPage'
import { OpenSourceCodeContents } from './components/contents/OpenSourceCodeContents'
import { OpenSourceDocumentContents } from './components/contents/OpenSourceDocumentContents'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        // index: true,
        element: <IndexPage />,
        children: [
          {
            index: true,
            path: 'code',
            element: <OpenSourceCodeContents />,
          },
          {
            path: 'document',
            element: <OpenSourceDocumentContents />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/authorized',
    element: <AuthorizedOAuth2Page />,
  },
]
const router = createBrowserRouter(routes)

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
