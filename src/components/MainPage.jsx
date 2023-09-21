import React from 'react'
import LeftSide from './LeftSide'
import CenterPage from './CenterPage'
import RightSide from './RightSide'
import "../components/Utility.css"
import { Outlet } from 'react-router-dom'



function MainPage() {
  return (
    <>
        <div className='w-full bg-slate-50 flex justify-between main_page gap-2'>
        <LeftSide/>
        <Outlet/>
        <RightSide/>
    </div>
    </>

  )
}

export default MainPage