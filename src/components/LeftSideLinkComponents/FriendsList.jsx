import React, { useEffect, useState } from 'react'

function FriendsList() {
  const [friendsData, setfriendsData] = useState([])
  const [pages, setPages] = useState(1)

  const fetchFriendsData = async () => {
    const url = `https://api.unsplash.com/search/users?page=1&query=user&client_id=GWBM0Iz1Sm8mf5w6uYK2tuyIa9V2ZWIVnRgiIgyriEI`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setfriendsData(data.results);
        console.log(data);
      } else {
        console.log("error")
      }

    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };
  useEffect(() => {
    fetchFriendsData();
  }, [])

  return (
    <div className='flex bg-green-300 w-3/5 h-full overflow-scroll p-2'>
      <div className='flex flex-col gap-2 w-3/4 bg-green-800'>
        {
          friendsData && friendsData.length > 0 && friendsData.map((friendsList) => {
            return (
              <div className='bg-green-200 rounded-md w-2/4 h-1/4 flex gap-2' key={friendsData.id}>
                  <div className='bg-white'>
                    <img src={friendsList.profile_image.medium} alt="" srcset="" />
                    <p>{friendsList.username}</p>
                  </div>
                  <div></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FriendsList