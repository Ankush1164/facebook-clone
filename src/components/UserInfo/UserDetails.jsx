import React, { useEffect, useState } from 'react'
import "../Utility.css"
import UserInfoPosts from './UserInfoPosts'

function UserDetails() {

    const [myFriends, setMyfrends] = useState([])
    useEffect(() => {
        const getFriends = () => {
            const getTotalFriends = localStorage.getItem("friendsData")
            if (getTotalFriends) {
                const parsedData = JSON.parse(getTotalFriends);
                setMyfrends(parsedData);
            }
        }
        getFriends();
        const refresh = setInterval(() => {
            getFriends();
        }, 1000)
        return (() => {
            clearInterval(refresh)
        })

    })

    return (
        <div className='overflow-y-scroll h-full w-full'>
                    <div className='bg-gray-100 w-full h-full flex flex-col'>
            <div className='flex w-full h-56 bg-red-600 relative'>
                <div className='bg-green-500 h-32 w-32 rounded-full absolute -bottom-14 left-14'>

                </div>
            </div>
            <div className=' w-full m-auto h-full flex flex-col'>
                <div className='bg-green-200 w-96 h-auto p-2 mt-14 ml-12 pl-2 pt-2 mb-5'>
                    <p className='text-lg font-semibold'>User Name</p>
                    <p className='mb-10'>Bio</p>
                    <div className='profileSec_buttons w-full flex justify-around'>
                        <button>Edit Profile</button>
                        <button>Share Profile</button>
                    </div>

                </div>
                <div className='bg-gray-200 w-full h-auto p-2 flex flex-col'>
                    <div className='w-full px-5 flex justify-between items-center border-b-2 border-white mb-2'>
                        <p className='text-lg'>Friends</p>
                        <p>Total Friends <span className='font-semibold'>{myFriends.length}</span></p>
                    </div>
                    <div className='flex w-full gap-5 flex-wrap p-1'>
                        {
                            myFriends && myFriends.length === 0 ? (<div><p>No Friends Yet</p></div>) : (
                                myFriends.map((d) => {
                                    return (
                                            <div className='bg-white rounded-md w-64 gap-2 p-2 flex drop-shadow-md'>
                                                <div>
                                                    <img src={d.profile} alt="" srcset="" className='h-24 w-24 rounded-md' />
                                                </div>
                                                <div className='flex flex-col justify-between'>
                                                    <p>{d.username}</p>
                                                    <div className='userSec_buttons'>
                                                    <button>Remove</button>
                                                    <button>Chat</button>
                                                    </div>

                                                </div>
                                            </div>

                                    )
                                })
                            )
                        }
                    </div>
                </div>
                        <UserInfoPosts/>
            </div>
        </div>
        </div>

    )
}

export default UserDetails