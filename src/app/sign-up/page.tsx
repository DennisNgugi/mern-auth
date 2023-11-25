"use client"
import { createUser } from '@/lib/actions'
import React from 'react'
import { useFormState } from 'react-dom'



export default function SignUp() {

  const initialState = {message : null,errors:{}}
  
  const [state,dispatch] = useFormState(createUser,initialState)
  
  console.log("popo = ",state)
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

    <form action={dispatch} className='flex flex-col gap-4'>
      <input type="text" placeholder='username' name='username' id='username' className='bg-slate-100 p-3 rounded-lg' />
      <input type="email" placeholder='email' name='email' id='email' className='bg-slate-100 p-3 rounded-lg' />

      <input type="password" placeholder='password' name='password' id='password' className='bg-slate-100 p-3 rounded-lg' />

      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:placeholder-opacity-95'>Sign Up</button>
    </form>

    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      {/* <Link to='/sign-in'>    
          <span className='text-blue-500'>Sign-In</span>
</Link> */}
    </div>
  </div>
  )
}
