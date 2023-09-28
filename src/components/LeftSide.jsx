import React from 'react'
import "../components/Utility.css"
import { Link } from 'react-router-dom'

function LeftSide() {
    return (
        <>

            {/* Main div */}
            <div className='w-80 left_box overflow-y-scroll scroll-smooth bg-slate-50'>

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
                        <Link to={'/friends'}>
                            <div>
                                <i class="fa-solid fa-user-group"></i>
                                <p>Friends</p>
                            </div>
                        </Link>


                        <Link to={'/groups'}>
                            <div>
                                <i class="fa-solid fa-user-group"></i>
                                <p>Groups</p>
                            </div>
                        </Link>


                        <div>
                            <i class="fa-regular fa-bookmark"></i>
                            <p>Saved Items</p>
                        </div>

                        
                        <Link to={'/videos'}>
                            <div>
                            <i class="fa-solid fa-video"></i>
                            <p>Videos</p>
                        </div>
                        </Link>

                        <Link to={"/marketPlace"}><div>
                            <i class="fa-solid fa-store"></i>
                            <p>Marketplace</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LeftSide