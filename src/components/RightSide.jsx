import React, { useEffect, useState } from 'react'
import FriendsList from './LeftSideLinkComponents/FriendsList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RightSide() {

    const [friendsData, setfriendData] = useState([]);


    useEffect(() => {
        // Function to update friends data from localStorage
        const updateFriendsData = () => {
            const storedData = localStorage.getItem("friendsData");
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setfriendData(parsedData);
            }
        };  
        updateFriendsData();
        const refreshInterval = setInterval(() => {
            updateFriendsData();
        }, 1000);
        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    const removeFriends = (username, profile) => {
        // Find the friend data to remove based on the username and profile
        const updatedFriendsData = friendsData.filter((friend) => {
            return friend.username !== username || friend.profile !== profile;
        });
    
        // Update the state with the filtered data
        setfriendData(updatedFriendsData);
    
        // Store the updated data in local storage
        localStorage.setItem("friendsData", JSON.stringify(updatedFriendsData));
    
        toast.success("Removed successfully");
    };
    return (
        <>
            <div className='bg-blue-50 w-80 right_page sticky flex flex-col justify-center items-center'>
                <div className='px-5 flex w-full'>
                <p className='font-semibold '>Sponsered</p>
                </div>
                
                {/* Sponsered Items box */}
                <div className='w-72 h-80 flex flex-col py-1 gap-2 mb-2'>
                    <div className='w-full flex items-center justify-between h-auto p-1 bg-gray-100 rounded-md drop-shadow-md'>
                        <img src="https://scontent.fixc11-1.fna.fbcdn.net/v/t45.1600-4/328208734_23852586662840345_8516444655382502893_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=111&ccb=1-7&_nc_sid=67cdda&_nc_ohc=q0D1d2iketEAX95TlaF&_nc_ht=scontent.fixc11-1.fna&oh=00_AfA2Z7bJy-hzPtHzFS51aHxOVy12zZJJVO59iETZMChhXg&oe=650D0DB9" alt="" srcset="" className='w-24 mr-5 h-24' />
                        <p className='text-left'>NFT Garden - Multi chain Minting Plateform  For ...</p>
                    </div>

                    <div className='w-full flex items-center justify-between h-auto p-1 bg-gray-100 drop-shadow-md rounded-md'>
                        <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='w-24 mr-5 h-24' />
                        <p className='text-left'>NFT Garden - Multi chain Minting Plateform  For ...</p>
                    </div>
                </div>


                {/* Frends section */}

                <div className=' w-full h-full  overflow-y-scroll p-1'>
                    <div className='flex items-center justify-between p-1'>
                        <p className='text-lg'>Friends</p>
                        <p className='text-sm'>Total Friends <span className='font-semibold'>{friendsData.length}</span></p>
                    </div>

                    {
                        friendsData && friendsData.length === 0 ? (<div><p>No Friends yet 😕</p></div>) : (
                            friendsData.map((storedFriends,index) => {
                                return (
                                    <div className=' w-full shadow-md mb-2 rounded-md' key={index}>
                                        <div className='flex items-center justify-between w-full p-1 '>
                                            <div className='w-3/4 flex gap-3'>
                                                <img src={storedFriends.profile} alt="" srcset="" className='h-11 w-11 rounded-full' />
                                                <p>{storedFriends.username}</p>
                                            </div>
    
                                            <div className='w-12 '>
                                                <button onClick={()=>removeFriends(storedFriends.username , storedFriends.profile)}><i class="fa-solid fa-trash"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                )
                            })
                        )
                        
                    }
                </div>
            </div>
        </>

    )
}

export default RightSide