import { useState } from 'react'
import './App.css' 
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Login from '../src/page/login'
import Register from './page/register'
import Navbar from './components/navbar/navbar'

import Home from './page/home'

import NotFound  from '../src/page/notFound'

 
const router = createBrowserRouter([
   {
    element: <Navbar />, 
    children: [
      {
    path: '/',
    element: <Home />,
  },
   {
  },
  ],
  },
  
    {
    path: '/login',
    element: <Login />,
  },
   {
    path: '/register',
    element: <Register />,
  },
    {
    path: '*',  
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
  
</>
  );
}

export default App; 
