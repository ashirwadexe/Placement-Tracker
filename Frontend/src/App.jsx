import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import AdminLogin from './components/AdminLogin'
import AddStudents from './components/AddStudents'
import AllPlacedStudents from './components/AllPlacedStudents'
import PlacementCalender from './page/PlacementCalender'
import AdminDashboard from './components/Admin/AdminDashboard'
import AddDrive from './components/Admin/AddDrive'

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
      path: "/admin/add-students",
      element: <AddStudents/>
    },
    {
      path: "/all-placed-students",
      element: <AllPlacedStudents/>
    },
    {
      path: "/placement-calender",
      element: <PlacementCalender/>
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard/>
    },
    {
      path: "/admin/add-drive",
      element: <AddDrive/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  )
}

export default App