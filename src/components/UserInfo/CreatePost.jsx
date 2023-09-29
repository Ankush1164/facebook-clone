import React from 'react'

function CreatePost() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className='w-2/4 border-2 rounded-md border-dotted border-slate-500 py-12 flex items-center justify-center flex-col gap-3'>
            <span className='text-3xl bg-gray-200 px-6 py-4 rounded-full cursor-pointer'><i class="fa-solid fa-plus"></i></span>
            <p className='text-gray-400'>Create post</p>
        </div>
    </div>
  )
}

export default CreatePost