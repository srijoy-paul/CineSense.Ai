import React from 'react';
import CineSense_logo from "../assets/CineSense_logo.png"

function Header() {
    return (
        <div className=' px-28  bg-gradient-to-b from-black'><img src={CineSense_logo} className='h-20 bg-[#0000005a]' alt="cinesense-logo" /></div>
    )
}

export default Header