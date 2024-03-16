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
import { MyProfileContent } from './components/contents/MyProfileContent'
import { MyRepositoriesContent } from './components/contents/MyRepositoriesContent'
import { MyPage } from './pages/MyPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
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
      {
        path: '/my',
        element: <MyPage />,
        children: [
          {
            index: true,
            path: 'profile',
            element: <MyProfileContent />,
          },
          {
            path: 'repositories',
            element: <MyRepositoriesContent />,
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
