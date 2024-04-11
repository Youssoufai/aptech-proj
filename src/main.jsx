import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Collecton from './components/Collection.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { route } from './router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
