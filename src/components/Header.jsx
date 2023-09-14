import React from 'react'
import sitelogo from "../assets/logo.png"
import "../components/Header.css"
import "../components/Utility.css"

function Header() {
    return (
        <div>
            <header className='bg-zinc-100 w-full flex justify-between'>
                <div className='w-fit mx-2 flex items-center justify-center  px-0.5'>
                    <img src={sitelogo} alt="" className='w-14 ' />
                    <input type="search" name="" id="" placeholder='search' className='h-8 w-44 rounded-md pl-2 border-0 outline-none' />
                </div>

                <div className='w-2/5 flex gap-20 justify-center p-2 items-center social_links'>
                    <i class="fa-solid fa-house"></i>
                    <i class="fa-solid fa-store"></i>
                    <i class="fa-solid fa-tv"></i>
                </div>

                <div className='w-56 mr-4 flex justify-around p-2 items-center social_icons'>
                    <i class="fa-solid fa-list-ul"></i>
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-user"></i>

                </div>

            </header>
        </div>
    )
}

export default Header