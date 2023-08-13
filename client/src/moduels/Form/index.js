import React from 'react'
import Input from '../../components/Input'

const Form = () => {
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center' >
      <div className='text-4xl font-extrabold '>Welcome</div>
      <div  className='text-xl font-lightbold mb-10'>Sign up now to get started</div>
      <Input label="Full name" name="name" placeholder='Enter your full name' className='mb-6'/>
      <Input label="Email address" type='email' name="email" placeholder='Enter your email' className='mb-6' />
      <Input label="password" type='password' name="password" placeholder='Enter your password' className='mb-6' />
    </div>
  )
}

export default Form
