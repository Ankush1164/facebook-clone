import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import "../Utility.css"

function NewsShaltter() {
  const [newsData, setnewsData] = useState([])
  const [loading, setLoading] = useState(false)


  const fetchNewsData = async () => {
    const url = `https://newsapi.org/v2/everything?q=india&apiKey=24aafd798fde473fa4da71738faf8ee4`

    try {
      setLoading(true)
      const response = await fetch(url)
      if (response.ok) {
        const result = await response.json()
        setnewsData(result.articles)
        console.log(result)
      }
      setLoading(false)
    } catch (er) {
      console.log("error in fetching data ", er)
    }

  }

  useEffect(() => {
    fetchNewsData();
  }, [])
  return (
    <div className='bg-gray-100 p-2 w-3/5 h-auto flex justify-center flex-col overflow-scroll scroll-smooth gap-2 news_sec'>
      <div className='w-full h-full flex flex-col gap-2'>
      <h2 className='border-b-2 p-2 text-lg font-bold tracking-wide text-blue-700 border-blue-200'>News Highlighted</h2>
        {
          loading ? <Spinner /> : (
            newsData && newsData.length > 0 && newsData.map((news) => {
              return (
                <div className='bg-white shadow-2xl w-full flex flex-col p-2 rounded-md' key={news.id}>
                  <img src={news.urlToImage} alt="" srcset="" />
                  <div className='w-full p-2 flex flex-col text-start gap-2 border-b-2 mb-2'>
                    <p className='text-left text-lg font-semibold'>{news.content.slice(0, 200)}</p>
                    <a href={news.url} className='text-blue-800 font-bold'>Read More....</a>
                  </div>
                  <div className='flex items-center justify-around w-full news_likeBox'>
                    <span><i class="fa-regular fa-heart"></i></span>
                    <span><i class="fa-regular fa-comment"></i></span>
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

export default NewsShaltter