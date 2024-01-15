import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Events from './components/Events.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "Events",
        element: <Events />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "Cart",
        element: <Cart />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
