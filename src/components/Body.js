import React from 'react'
import BrowsePage from '../Pages/BrowsePage'
import LoginPage from '../Pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function Body() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <BrowsePage />
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Body