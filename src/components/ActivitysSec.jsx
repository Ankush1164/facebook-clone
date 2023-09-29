import React from 'react'

function ActivitysSec() {
  return (
    <>
      <div className='bg-white w-full h-44 rounded-md p-2 flex flex-col mb-5 drop-shadow-md'>

        {/* profile sec box */}
        <div className='flex items-center pl-5 gap-5 py-2 border-inherit pb-4 border-b-2'>
          {/* img part */}
          <div className='w-16 h-16 bg-green-200 rounded-full'></div>
          <div className='grow flex'>
            <input type="text" name="" id="" placeholder='What are you thinking ? 😁' className='w-3/5 rounded-md p-2 drop-shadow-md' />
          </div>
          <span className='w-14'><i class="fa-solid fa-ellipsis-vertical text-xl cursor-pointer"></i></span>
        </div>

        {/* activity icons box */}

        <div className='flex justify-around items-center w-full h-full activity_controles'>
          <div><i class="fa-solid fa-video text-xl text-red-700 cursor-pointer"></i>Live video</div>
          <div><i class="fa-regular fa-images text-green-600 text-xl cursor-pointer"></i>Photo / Video</div>
          <div><i class="fa-regular fa-face-smile text-yellow-200 text-xl cursor-pointer"></i>Fellings / Activity</div>
        </div>
      </div>
    </>
  )
}

export default ActivitysSec