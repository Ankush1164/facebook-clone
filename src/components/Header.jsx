import React, { useState } from 'react'
import sitelogo from "../assets/logo.png"
import "../components/Header.css"
import "../components/Utility.css"
import { Link } from 'react-router-dom'
import "./Utility.css"
import MenuBar from './HeaderMenuLinks/MenuBar'

function Header() {
    const [menuBox , setMenuBox] = useState(false)
    const ShowMenu = ()=>{
        setMenuBox((prevMenuBox) => !prevMenuBox);
    }

    return (
        <div>
            <header className='bg-blue-100 w-full flex justify-between drop-shadow-md  header_sec'>
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
                    <button onClick={ShowMenu}><i class="fa-solid fa-list-ul"></i></button>
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <i class="fa-solid fa-bell"></i>
                    <Link to={'/UserProfile'}><i class="fa-solid fa-user"></i></Link>

                </div>

            </header>
            {
                menuBox && (
                    <div className='bg-blue-50 h-5/6  w-80 absolute right-2 z-10 transition-all 0.3s'>
                    <MenuBar/>
                </div>
                )
            }

        </div>
    )
}

export default Header