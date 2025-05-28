import React from 'react'
import NavbarLarge from './navbarLarge'
// import NavbarSmall from './navbarSmall'
import { Outlet } from 'react-router-dom'

function navbar() {
  return (
    <div>
        <NavbarLarge/>
        {/* <NavbarSmall/> */}
           <Outlet />
    </div>
  )
}

export default navbar