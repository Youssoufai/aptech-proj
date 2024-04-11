import App from './App.jsx'
import Collecton from './components/Collection.jsx'
import { createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
export const route = createBrowserRouter([
    { path: '/', element: < App /> },
    { path: '/about', element: <About /> },
    { path: '/collection', element: <Collecton /> },
    { path: '/contact', element: <Contact /> }
])