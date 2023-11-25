import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-slate-200'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'><h1 className='font-bold'>Auth App</h1></Link>
        
        <ul className='flex gap-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/sign-in'><li>Sign in</li></Link>
            
        </ul>
    </div>
    </div>
  )

  
}
