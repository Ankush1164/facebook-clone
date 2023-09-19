import React from 'react'
import "./Utility.css"
import crousalData from "../components/CrousalData"
function StoriesSec() {
    function crousalValues(val) {
        return (
            <div className='h-full crousalimg_box'>
                <img srcset={val.imgUrl} alt="" className='w-full h-full rounded-md'/>
            </div>
        )
    }

    // const prevHandler = () =>{
    //     alert("hello")
    // }
    return (
        <>
            <div className='bg-red-200 w-full h-44 relative overflow-scroll'>
            <div className='bg-transparent w-full h-full flex items-center justify-between absolute z-10'>
                    <button>Next</button>
                    <button>prev</button>
                </div>
                <div className='flex h-full gap-2 w-full'>
                    {crousalData.map(crousalValues)}
                </div>

            </div>


        </>
    )
}

export default StoriesSec

// import React from 'react';
// import './Utility.css';
// import Slider from 'react-slick';
// import crousalData from '../components/CrousalData';

// function StoriesSec() {
//   function crousalValues(val) {
//     return (
//       <div className='h-full crousalimg_box' key={val.id}>
//         <img src={val.imgUrl} alt="" className='w-full h-full rounded-md' />
//       </div>
//     );
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   return (
//     <>
//       <div className='w-full h-44 overflow-hidden relative'>
//         <div className='h-full w-full flex justify-between items-center px-2 absolute'>
//           <button>
//             <i className="fas fa-chevron-left text-2xl text-white"></i>
//           </button>
//           <button>
//             <i className="fas fa-chevron-right text-2xl text-white"></i>
//           </button>
//         </div>

//         <div className='flex gap-2 h-44 p-1 z-10'>
//           <Slider {...settings}>
//             {crousalData.map(crousalValues)}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StoriesSec;