import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import AdminLogin from './components/AdminLogin'
import AddStudents from './components/AddStudents'

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/admin/addstudents",
      element: <AddStudents/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default App