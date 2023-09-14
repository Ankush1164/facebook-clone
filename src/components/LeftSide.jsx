import React from 'react'
import "../components/Utility.css"

function LeftSide() {
    return (
        <>

            {/* Main div */}
            <div className='w-80 left_box overflow-y-scroll scroll-smooth sticky'>

                {/* Main div children */}
                <div className='w-full h-full flex flex-col p-2 gap-1'>

                    {/* User box */}
                    <div className='flex w-full items-center p-3 gap-5'>
                        <i class="fa-solid fa-user"></i>
                        <p>User Name here</p>
                    </div>

                    {/* User activities box */}
                    <div className='full h-full flex flex-col px-3 py-3 gap-5 left_sideItems_link'>

                        {/* all links */}
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                            <p>Friends</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                            <p>Friends</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                            <p>Friends</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                            <p>Friends</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                            <p>Friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LeftSide