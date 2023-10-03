import React from 'react'
import "./Utility.css"
import RegisterForm from './RegisterForm'

function Register() {
return(
    <>
    <div className='w-full h-screen bg-blue-50 p-1'>
        <div className='w-full h-full  flex items-center justify-center gap-4'>
            <div className='w-1/3 h-full flex flex-col'>
                <div className='w-full h-56 flex justify-end items-start p-5 mt-32 flex-col gap-4'>
                    <img src="https://o.remove.bg/downloads/e8bff99e-f05a-47dd-bab5-017ba34cdd85/images-removebg-preview.png" alt="" className='w-80'/>
                    <p className='text-left font-serif font-thin text-gray-800'>Share moments, not just photos. Join the 𝙎𝙤𝙘𝙞𝙖𝙡 revolution</p>
                    <p className='text-left font-serif font-thin text-gray-800'>Meta-powered magic for a brighter social future.</p>
                </div>
               

            </div>
            <div className='w-2/4  h-full p-3 drop-shadow-lg '>
                <div className='bg-gray-100 w-full h-full p-3 overflow-scroll scroll-smooth'>
                    <p className='text-xl font-sarif border-b-2 p-4 mb-5'> Ready to get started</p>

                    <RegisterForm/>

                    

                    
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Register