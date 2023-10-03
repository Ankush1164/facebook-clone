import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SavedItems() {
    const [itemData, setitemData] = useState([]);

    useEffect(() => {
        // Function to update items data from localStorage
        const updateitemsData = () => {
            const storedData = localStorage.getItem("items");
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setitemData(parsedData);
            }
        };

        updateitemsData();

        const refreshInterval = setInterval(() => {
            updateitemsData();
        }, 1000);

        return () => {
            clearInterval(refreshInterval);
        };
    }, []);


    const removeProduct = (image, title) => {
        // Filter out the item to be removed based on the provided data
        const updateditemsData = itemData.filter((item) => {
            return (
                item.image !== image || item.title !== title
            );
        });

        // Update the state with the filtered data
        setitemData(updateditemsData);

        // Store the updated data in local storage
        localStorage.setItem("items", JSON.stringify(updateditemsData));

        toast.success("Detele Successfully" ,{
            position:"top-center",
            autoClose: 1000
        });
    };

    return (
        <div className='w-7/12 bg-blue-100 h-full p-1 overflow-y-scroll'>
            <ToastContainer/>
            <div className='w-full  h-auto flex flex-col gap-2'>
                {itemData && itemData.length === 0 ? (<div className='flex flex-col gap-4 w-full h-screen justify-center items-center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtWETgihNWshkyH3e6FYh_ENVcewrTV0VqA&usqp=CAU" alt="image h ek" className='rounded-lg'/><p className='text-lg font-semibold'>Tune kuch save nhi kiya abhi tk</p></div>) : (
                    itemData.map((val) => {
                        return (
                            <div className='w-full h-44 bg-gray-100 flex items-start justify-between rounded-md shadow-md' key={val.id}>
                                <div className=' h-full p-1 flex w-11/12 gap-4'>
                                    <img src={val.image} alt="" srcset="" className='w-48  rounded-md' />
                                    <div className='flex flex-col items-start w-full h-full gap-2'>
                                        <p className='text-lg font-semibold'>{val.title}</p>
                                        <p className='text-left'>{val.description}</p>
                                        <p className='font-semibold text-xs'>Total Price :- {val.price} $</p>
                                    </div>
                                </div>
                                <div className='flex w-32 h-full items-center justify-center'>
                                    <button onClick={() => removeProduct(val.image, val.title)}><i class="fa-solid fa-eraser text-xl"></i></button>
                                </div>
                            </div>
                        )
                    })
                )

                }
            </div>

        </div>
    )

}

export default SavedItems

