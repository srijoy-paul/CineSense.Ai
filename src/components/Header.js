import React, { useState } from 'react';
import CineSense_logo from "../assets/CineSense_logo.png"
import user_icon from "../assets/user_icon.png"
import ProfileDropDown from './ProfileDropDown';
import { useLocation } from 'react-router-dom';
function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    console.log(location.pathname + " from headerjs");

    return (
        <div className=' px-28  bg-gradient-to-b from-black flex justify-between items-center relative'>
            <img src={CineSense_logo} className='h-20 bg-[#0000005a] cursor-pointer' alt="cinesense-logo" onClick={() => window.location.href = "/"} />

            {location.pathname === "/login" ? "" : <button className='' onClick={() => setOpen((prev) => !prev)}><img src={user_icon} className='h-9' alt="" /></button>}

            <ProfileDropDown open={open} />
        </div>
    )
}

export default Header