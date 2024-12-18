import React, { useEffect } from 'react'
import BrowsePage from '../Pages/BrowsePage'
import LoginPage from '../Pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
function Body() {
    const dispatch = useDispatch();
    const router = createBrowserRouter([
        {
            path: "/",
            element: <BrowsePage />
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Body