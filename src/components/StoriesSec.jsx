import React from 'react'
import "./Utility.css"
import crousalData from "../components/CrousalData"

function StoriesSec() {
    function crousalValues(val) {
        return (
            <div className='h-full crousalimg_box'>
                <img srcset={val.imgUrl} alt="" className='w-full h-full rounded-md'/>
            </div>
        )
    }
    return (
        <>
            <div className='w-full h-44 overflow-hidden relative'>
                <div className='h-full w-full flex justify-between items-center px-2 absolute'>
                    <button><i class="fa-solid fa-circle-chevron-left text-2xl text-white"></i></button>
                    <button><i class="fa-solid fa-circle-chevron-right text-2xl text-white"></i></button>
                </div>
                <div className='flex gap-2 h-44 p-1 z-10'>
                    {crousalData.map(crousalValues)}
                </div>

            </div>
        </>
    )
}

export default StoriesSec