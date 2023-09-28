import React, { useEffect, useState } from 'react'
import Spinner from "../Spinner.jsx"

function MarketItems() {

  const [items , setItems] = useState([]);
  const [loading , setLoading] = useState(false)

  const fetchItems = async()=>{
    let apiUrl = `https://dummyjson.com/products`;
    try{
      setLoading(true)
      const res = await fetch(apiUrl);
      if(res.ok){
        const result = await res.json();
        setItems(result.products)
        console.log(result)
      }else{
        alert("error")
      }
      
    }
    catch(err){
      console.log("error in fetching data" , err)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchItems();
  },[])
  return (
    <div className='w-3/5 h-full flex-wrap bg-gray-100 flex justify-between gap-5 overflow-x-scroll p-2'>
        {
          loading ? <Spinner/> : (
            items && items.length > 0 && items.map((itemsList)=>{
              return(
                <div className='bg-white w-56 h-auto flex flex-col rounded-md shadow-2xl p-1' id={itemsList.id}>
                  <div>
                  <img src={itemsList.images[0]} alt="" srcset="" className='w-full h-52 mix-blend-multiply rounded-md mb-2'/>
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
                    <span className='text-lg cursor-pointer'><i class="fa-regular fa-bookmark"></i></span>
                  </div>
  
                    
                </div>
              )
            })
          )

        }
    </div>
  )
}

export default MarketItems