import React from 'react'
import sitelogo from "../assets/logo.png"
import "../components/Header.css"
import "../components/Utility.css"
import { Link } from 'react-router-dom'
import "./Utility.css"

function Header() {
    return (
        <div>
            <header className='bg-blue-100 w-full flex justify-between drop-shadow-md  z-10 header_sec'>
                <div className='w-fit mx-2 flex items-center justify-center  px-0.5'>
                    <img src={sitelogo} alt="" className='w-14 ' />
                    <input type="search" name="" id="" placeholder='search' className='h-8 w-44 rounded-md pl-2 border-0 outline-none' />
                </div>

                <div className='w-2/5 flex gap-20 justify-center p-2 items-center social_links'>
                    <Link to={'/'}><i class="fa-solid fa-house"></i></Link>
                    <Link to={'/marketPlace'}><i class="fa-solid fa-store"></i></Link>
                    <Link to={'/videos'}><i class="fa-solid fa-tv"></i></Link>
                    <Link to={'/newsShaltter'}><i class="fa-regular fa-newspaper"></i></Link>
                </div>

                <div className='w-56 mr-4 flex justify-around p-2 items-center social_icons'>
                    <i class="fa-solid fa-list-ul"></i>
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <i class="fa-solid fa-bell"></i>
                    <Link to={'/UserProfile'}><i class="fa-solid fa-user"></i></Link>

                </div>

            </header>
        </div>
    )
}

export default Header