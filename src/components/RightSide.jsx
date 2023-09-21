import React from 'react'

function RightSide() {
    return (
        <>
            <div className='bg-blue-300 w-80 right_page sticky flex flex-col gap-2 justify-center items-center'>
                <p>Sponsered</p>
                {/* Sponsered Items box */}
                <div className= 'w-72 h-80 flex flex-col py-1 gap-2'>
                    <div className='w-full flex items-center justify-between h-auto p-1 bg-gray-100 rounded-md drop-shadow-md'>
                        <img src="https://scontent.fixc11-1.fna.fbcdn.net/v/t45.1600-4/328208734_23852586662840345_8516444655382502893_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=111&ccb=1-7&_nc_sid=67cdda&_nc_ohc=q0D1d2iketEAX95TlaF&_nc_ht=scontent.fixc11-1.fna&oh=00_AfA2Z7bJy-hzPtHzFS51aHxOVy12zZJJVO59iETZMChhXg&oe=650D0DB9" alt="" srcset="" className='w-24 mr-5 h-24'/>
                        <p className='text-left'>NFT Garden - Multi chain Minting Plateform  For ...</p>
                    </div>

                    <div className='w-full flex items-center justify-between h-auto p-1 bg-gray-100 drop-shadow-md rounded-md'>
                        <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='w-24 mr-5 h-24'/>
                        <p className='text-left'>NFT Garden - Multi chain Minting Plateform  For ...</p>
                    </div>
                </div>


                {/* Frends section */}

                <div className='bg-yellow-100 w-full h-full  overflow-y-scroll'>
                </div>
            </div>
        </>

    )
}

export default RightSide