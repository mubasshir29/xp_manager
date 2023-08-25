'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const [error,setError] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        if(!email || !password){
            setError("Enter login details")
        }
        try{
            const res = await signIn('credentials',{
                email, password, redirect: false
            })
            if (res.error){
                setError("Invalid crednetials")
                return
            }
            router.replace("/")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-indigo-50 flex justify-center items-center'>
        <div className='w-[360px] p-8 bg-white rounded-2xl shadow-lg border-t-4 border-indigo-400'>
            <form onSubmit={(e)=>handleLoginSubmit(e)} className='space-y-4'>
                <div>
                    <h2 className='text-3xl font-bold text-indigo-500'>Login</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm'>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='text' name='email' placeholder='Enter username'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='password' name='password' placeholder='Enter password'></input>
                </div>
                <div className='flex justify-between w-full items-center gap-3'>
                    <span className=' text-red-400 text-sm p-1 rounded-lg'>{error}</span>
                    <button type='submit' className='bg-indigo-500 self-end rounded-lg py-2 px-8 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300'>Login</button>
                </div>
                <div className='flex justify-end items-center gap-3'>
                    <Link className='text-indigo-400 text-sm hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 p-1 rounded-lg' href='/signup'>Don't have account? Create</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page