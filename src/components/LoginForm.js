import React from 'react'

function LoginForm() {
    return (
        <form className='px-5 py-8 text-white bg-[#000000c1] flex flex-col gap-3 w-1/4 rounded-md'>
            <h1 className='text-3xl font-bold tracking-wide mb-6'>Sign In</h1>
            <input type="email" placeholder="Email Address" id="signin-email" className='bg-gray-800 text-white p-4 rounded-sm' />
            <input type="password" placeholder="Password" id="" className='bg-gray-800 text-white p-4 rounded-sm' />
            <button className='mt-6 text-white font-semibold rounded-sm  p-3 bg-[#BB86FC]'>Sign In</button>

            <p className='mt-4 text-[#B0B0B0]'>New to CineSense? <span className='text-white font-medium'>Sign Up Now.</span></p>
        </form>
    )
}

export default LoginForm