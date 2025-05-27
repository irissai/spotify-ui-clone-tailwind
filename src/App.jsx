import { useState } from 'react'
import './App.css' 
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Register from '../src/page/register'
import NotFound  from '../src/page/notFound'

 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
    {
    path: '*', // จัดการ 404 สำหรับ path ที่ไม่ match ใด ๆ
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
