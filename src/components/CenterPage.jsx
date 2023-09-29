import React from 'react'
import StoriesSec from "./StoriesSec"
import ActivitysSec from './ActivitysSec'
import AllPosts from './AllPosts'
function CenterPage() {
    return (
        <>
        <div className='center_page bg-blue-100 p-2 overflow-scroll'>
        <StoriesSec />
        <ActivitysSec/>
        <AllPosts/>
        </div>
  

         </>

        
    )
}

export default CenterPage