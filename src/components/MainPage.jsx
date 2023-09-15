import React from 'react'
import LeftSide from './LeftSide'
import CenterPage from './CenterPage'
import RightSide from './RightSide'
import "../components/Utility.css"


function MainPage() {
  return (
    <>
        <div className='w-full bg-slate-200 flex justify-between main_page gap-2'>
        <LeftSide/>
        <CenterPage/>
        <RightSide/>
    </div>
    </>

  )
}

export default MainPage