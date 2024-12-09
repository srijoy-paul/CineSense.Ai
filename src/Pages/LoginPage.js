import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <div className='bg-bgImage h-full flex flex-col'>
      <Header />
      <div className='flex justify-center items-center flex-1'>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage