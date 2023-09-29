import React, { useEffect, useState } from 'react'
import Spinner from "../Spinner.jsx"
import "../Utility.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MarketItems() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    let apiUrl = `https://dummyjson.com/products`;
    try {
      setLoading(true)
      const res = await fetch(apiUrl);
      if (res.ok) {
        const result = await res.json();
        setItems(result.products)
        console.log(result)
      } else {
        alert("error")
      }

    }
    catch (err) {
      console.log("error in fetching data", err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchItems();
  }, [])

  const saveItems = (image, price, title , description) => {
    // Get the existing friends data from localStorage or initialize it as an empty array
    const existingitemData = JSON.parse(localStorage.getItem('items')) || [];

    // Check if the friend is already in the list
    const isitemAdded = existingitemData.some((item) => {
      return item.image === image && item.price === price && item.title === title;
    });

    // If the friend is not already in the list, add it
    if (!isitemAdded) {
      // Create a new friend object with the username and profile
      const newitem = { price, image, title ,description };

      // Add the new friend to the existing data
      existingitemData.push(newitem);

      // Save the updated friends data to localStorage
      localStorage.setItem('items', JSON.stringify(existingitemData));
      toast.success("Product Saved Successfully",{
        position:"top-center",
        autoClose: 1000
      })
    } else {
      toast.warning("Already saved" ,{
        position:"top-center",
        autoClose: 1000
      })
    }
  };


  return (
    <>
      <ToastContainer />
      <div className='w-3/5 h-full flex-wrap bg-blue-100 flex justify-between gap-5 overflow-x-scroll p-2 market_Sec'>
        {
          loading ? <Spinner /> : (
            items && items.length > 0 && items.map((itemsList) => {
              return (
                <div className='bg-white w-56 h-auto flex flex-col rounded-md shadow-2xl p-1 marketSec_products' id={itemsList.id}>
                  <div>
                    <img src={itemsList.images[0]} alt="" srcset="" className='w-full h-52 mix-blend-multiply rounded-md mb-2' />
                  </div>

                  <div className='flex justify-between item-center px-1 py-1 border-b-2 mb-1'>
                    <p className='text-sm font-semibold font-mono break-words text-clip text-left truncate w-36'>{itemsList.title}</p>
                    <p className='text-sm font-semibold'>{itemsList.price}$</p>
                  </div>

                  <div>
                    <p className='text-left text-sm  h-8 truncate'>{itemsList.description}</p>
                  </div>
                  <div className='flex p-1 justify-between items-center'>
                    <button className='bg-blue-400 text-white px-8 py-1 font-serif rounded-md'>Buy</button>
                    <button className='text-lg cursor-pointer' onClick={() => saveItems(itemsList.images[0], itemsList.price, itemsList.title, itemsList.description)}>
                      <i class={`fa-regular fa-bookmark`}></i>
                    </button>
                  </div>

                </div>
              )
            })
          )

        }
      </div>
    </>
  )
}

export default MarketItems