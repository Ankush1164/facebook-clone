import React from 'react'
import "../components/Spinner.css"

function Spinner() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <span class="loader"></span>
    </div>
  )
}

export default Spinner