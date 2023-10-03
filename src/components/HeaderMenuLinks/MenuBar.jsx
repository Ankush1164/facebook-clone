import React from 'react'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <div className='w-full h-full z-30 flex flex-col'>
      <div className='border-b-2 border-gray-200 w-full p-3 flex items-center justify-around mt-2'>
        <Link to={'/register'}><button className='rounded-md drop-shadow-lg px-5 py-2 bg-blue-500 text-white'>Create Account</button></Link>
        <button className='rounded-md drop-shadow-lg bg-green-500 text-white px-4 py-2'>SignIn</button>
      </div>
    </div>
  )
}

export default MenuBar