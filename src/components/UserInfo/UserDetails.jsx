import React from 'react'
import "../Utility.css"

function UserDetails() {
    return (
            <div className='bg-gray-200 w-full h-screen flex flex-col overflow-scroll'>
                <div className='flex w-full h-96 bg-red-600 relative'>
                    <div className='bg-green-500 h-32 w-32 rounded-full absolute -bottom-14 left-14'>

                    </div>
                </div>
                <div className=' w-full m-auto h-full flex flex-col'>
                    <div className='bg-green-200 w-96 h-auto p-2 mt-14 ml-12 pl-2 pt-2 '>
                        <p className='text-lg font-semibold'>User Name</p>
                        <p className='mb-10'>Bio</p>
                        <div className='profileSec_buttons w-full flex justify-around'>
                        <button>Edit Profile</button>
                        <button>Share Profile</button>
                        </div>

                    </div>

                    <div className='w-full h-auto bg-gray-400 mt-5'>
                        <h1 className='text-center text-xl font-bold'>All Posts</h1>
                    </div>
                </div>
            </div>
    )
}

export default UserDetails