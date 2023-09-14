import React from 'react'
import StoriesSec from "./StoriesSec"
import ActivitysSec from './ActivitysSec'
import AllPosts from './AllPosts'
function CenterPage() {
    return (
        <>
        <div className='center_page bg-slate-200 p-1 overflow-scroll'>
        <StoriesSec />
        <ActivitysSec/>
        <AllPosts/>
        </div>
  

         </>

        
    )
}

export default CenterPage