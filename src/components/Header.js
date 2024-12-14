import React, { useEffect, useState } from 'react';
import CineSense_logo from "../assets/CineSense_logo.png"
import user_icon from "../assets/user_icon.png"
import ProfileDropDown from './ProfileDropDown';
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(location.pathname + " from headerjs");


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            //signin or signup
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid,
                    email,
                    displayName
                }));
                navigate("/");
            } else {
                // logout
                dispatch(removeUser());
                navigate("/login");
            }
        });
        return (() => {
            unsubscribe()
        });
    }, []);

    return (
        <div className=' px-28  bg-gradient-to-b from-black flex justify-between items-center relative'>
            <img src={CineSense_logo} className='h-20 bg-[#0000005a] cursor-pointer' alt="cinesense-logo" onClick={() => window.location.href = "/"} />

            {location.pathname === "/login" ? "" : <button className='' onClick={() => setOpen((prev) => !prev)}><img src={user_icon} className='h-9' alt="" /></button>}

            <ProfileDropDown open={open} />
        </div>
    )
}

export default Header