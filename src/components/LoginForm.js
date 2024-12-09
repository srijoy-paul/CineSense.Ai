import React, { useRef, useState } from 'react'
import { validateLoginForm } from '../utils/validateLoginForm';


function LoginForm() {
    const [isLogInForm, setIsLogInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        console.log(email);
        const password = passwordRef.current.value;
        console.log(password);

        const result = validateLoginForm(email, password);
        console.log(result);
        setErrMessage(result.mssg);
        if (result.status === "false") return;
        //signin logic
        if (isLogInForm) {
            //login logic
        } else {
            //signup logic
        }


    }
    return (
        <form className='px-5 py-8 text-white bg-[#000000c1] flex flex-col gap-3 w-1/4 rounded-md' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold tracking-wide mb-6'>{isLogInForm ? "Sign In" : "Sign up"}</h1>

            {isLogInForm ? "" : <input type="text" ref={nameRef} placeholder="Your Name" className='bg-gray-800 text-white p-4 rounded-sm' id="" />}

            <input ref={emailRef} type="email" placeholder="Email Address" id="signin-email" className='bg-gray-800 text-white p-4 rounded-sm' />
            <input ref={passwordRef} type="password" placeholder="Password" id="signin-password" className='bg-gray-800 text-white p-4 rounded-sm' />

            <p className='text-red-500 font-semibold'>{errMessage}</p>

            <button type='submit' className='mt-6 text-white font-semibold rounded-sm  p-3 bg-[#BB86FC]'>{isLogInForm ? "Sign In" : "Sign up"}</button>

            <p className='mt-4 text-[#B0B0B0]'>{isLogInForm ? "New to CineSense?" : "Already a user?"} <span className='text-white font-medium cursor-pointer' onClick={() => setIsLogInForm((prev) => !prev)}>{isLogInForm ? "Sign Up Now" : "Sign In"}.</span></p>
        </form>
    )
}

export default LoginForm