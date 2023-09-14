import React, { useState, useEffect } from 'react'


function AllPosts() {
    let url = `https://api.unsplash.com/search/photos?page=10&query=all&client_id=GWBM0Iz1Sm8mf5w6uYK2tuyIa9V2ZWIVnRgiIgyriEI`
    const [data, setData] = useState([]);
    const fetchInfo = async () => {
        return await fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d.results))
    }
    console.log(data)
    useEffect(() => {
        fetchInfo();
    }, []);
    return (
        <div>
            {
                data && data.length > 0 && data.map((dataObj) => {
                    return (

                        <div className='w-full h-auto border-black border-2 mb-5 rounded-md'>
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
                            <div className="bg-blue-200 w-full h-24 flex gap-8 user_intrestion px-2 py-2">
                                <div className='flex gap-2 items-center h-8 w-full border-b-2 border-slate-500'>
                                <span><i class="fa-regular fa-thumbs-up text-sm"></i></span>
                                <p className='text-sm'>Liked by {dataObj.likes} pepole</p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

            <div className=" fle w-full h-10 justify-center items-center">
                <button className='border-2 border-current px-4'>See More</button>
            </div>
        </div>
    )
}

export default AllPosts