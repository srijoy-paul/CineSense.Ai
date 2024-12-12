import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
function ProfileDropDown({ open }) {
    const navigate = useNavigate();
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        })
    }
    return (
        <div className={`dropdown ${open ? 'open' : ''} rounded-md`}>
            <ul className='flex flex-col gap-2'>
                <li className='py-2 hover:bg-black px-3 rounded-md cursor-pointer' onClick={handleSignout}>Sign out</li>
            </ul>
        </div>
    )
}

export default ProfileDropDown