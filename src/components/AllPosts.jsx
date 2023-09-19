import React, { useState, useEffect } from 'react'
import "../components/Utility.css"


function AllPosts() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=all&client_id=GWBM0Iz1Sm8mf5w6uYK2tuyIa9V2ZWIVnRgiIgyriEI`;

    // Fetch data from the API when the 'page' value changes.
    const fetchInfo = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData((prevData) => [...prevData, ...data.results]);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, [page]);

    // Function to load more data when the "See More" button is clicked.
    function loadMoreData() {
        setPage((prevPage) => prevPage + 1);
    }


        return (
        <div>
            {
                data && data.length > 0 && data.map((dataObj) => {
                    return (

                        <div className='w-full h-auto border-slate-500 border-2 mb-5 rounded-md'>
                            <div className='flex w-full gap-3 p-2 items-center'>
                                <div className='bg-red-200 h-12 w-12 rounded-full'>
                                    <img src={dataObj.user.profile_image.medium} alt="" srcset="" className='rounded-full' />
                                </div>
                                <div className='flex flex-col items-start grow'>
                                    <p>{dataObj.user.name}</p>
                                    <span className='text-xs'><i class="fa-solid fa-earth-americas"></i> {dataObj.updated_at}</span>
                                </div>
                                <button className='py-1 px-4 rounded-md bg-blue-500 text-white mr-5'>Follow</button>

                            </div>
                            <div className='flex ml-4 mb-3'>
                                <p className='font-sans'>{dataObj.alt_description}</p>
                            </div>
                            <div>
                                <img src={dataObj.urls.regular} alt="" srcset="" />
                            </div>
                            <div className="w-full h-auto flex user_intrestion px-2 py-2 flex-col">
                                <div className='flex gap-2 items-center h-8 w-full'>
                                <span><i class="fa-regular fa-thumbs-up text-sm"></i></span>
                                <p className='text-sm'>Liked by {dataObj.likes} pepole</p>
                                </div>

                                <div className='w-full h-auto flex justify-around p-1 comment_sec border-t-2 border-slate-400'>
                                    <span><i class="fa-regular fa-thumbs-up"></i> Like</span>
                                    <span><i class="fa-regular fa-comment"></i> Comment</span>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

            <div className=" fle w-full h-10 justify-center items-center">
                <button className=' px-4 bg-blue-500' onClick={loadMoreData}>See More <i class="fa-solid fa-angle-down"></i></button>
            </div>
        </div>
    )
}
export default AllPosts

