import React, { useEffect, useState } from 'react'
import Spinner from "../Spinner.jsx"

function FriendsList() {
  const [friendsData, setfriendsData] = useState([])
  const [pages, setPages] = useState(1)
  const [loading , setLoading] = useState(false)
  const fetchFriendsData = async () => {
    const url = `https://api.unsplash.com/search/users?page=${pages}&query=Person&client_id=GWBM0Iz1Sm8mf5w6uYK2tuyIa9V2ZWIVnRgiIgyriEI`;
    try {
      setLoading(true)
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setfriendsData((prevData) => [...prevData , ...data.results]);
        console.log(data);
      } else {
        console.log("error")
      }

    } catch (error) {
      console.error("Error in fetching data:", error);
    }
    setLoading(false)
  };
  const loadFriends = ()=>{
    setPages((pichewalaData)=> pichewalaData + 1)
    fetchFriendsData();
}
  useEffect(() => {
    loadFriends();
  }, [])

  const addFriend = ()=>{
    
   alert("nn")
  }

  return (
    <>

      <div className='flex bg-gray-100 w-3/5 h-full overflow-y-scroll p-2 flex-wrap gap-5 justify-around'>
        {
          loading ? <Spinner/> : (
            friendsData && friendsData.length > 0 && friendsData.map((friendsList) => {
              return (
                <div className='bg-white rounded-md w-52 p-1 flex flex-col gap-2 items-center shadow-lg' key={friendsData.id}>
                  <div className='w-full'>
                    <img src={friendsList.profile_image.large} alt="" className='h-36 w-full rounded-md' />
                  </div>
                  <div className='flex flex-col items-start w-full '>
                    <p className='text-xl font-mono break-all text-left'>{friendsList.username}</p>
                    <p className='text-sm mb-2 text-center'>Photos Likes {friendsList.total_likes}</p>
  
                    <div className='flex gap-1  w-full items-center justify-between'>
                      <button className='bg-blue-300 px-1 rounded-md text-sm py-2 border-blue-400 border-2' onClick={addFriend}>Add Friends</button>
                      <button className='bg-gray-200 px-1 rounded-md text-sm py-2 border-gray-400 border-2'>Remove Friends</button>
                    </div>
  
                  </div>
  
                </div>
  
              )
            })
          )

        }
        <div className=' w-full h-14 bottom-0 items-center justify-center flex'>
          <button className='bg-blue-400 px-8 py-1 rounded-md text-black' onClick={loadFriends}>See More <span className='ml-1'><i class="fa-solid fa-circle-arrow-down"></i></span></button>
        </div>
      </div>

    </>
  )
}

export default FriendsList