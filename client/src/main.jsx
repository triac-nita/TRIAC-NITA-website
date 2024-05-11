import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Blogs from './pages/Blogs.jsx'
import Gallery from './pages/Gallery.jsx'
import Projects from './pages/Projects.jsx'

const router= createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/events",
        element: <Events/>
      },
    
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
