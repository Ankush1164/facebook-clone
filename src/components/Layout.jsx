import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import LeftSide from './LeftSide'

function Layout() {
  return (
    <div>
        <Header/>
        <LeftSide/>
        <Outlet/>
    </div>
  )
}

export default Layout