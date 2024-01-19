import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github />,
        
      },
      {
        path:"user/:userid",
        element: <User />
      },
    ]
  },
  {
    path: '/new',
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Github />
      },
      {
        path:"about",
        element: <Contact />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github />,
        
      },
      {
        path:"user/:userid",
        element: <User />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
