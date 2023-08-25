'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name || !email || !password || !confirmPassword){
            setError("All fields are manadatory")
        }
        if(!(password === confirmPassword)){
            setError("Please confirm password")
        }
        try{
            const res = await fetch("/api/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    name,
                    password 
                })
            })
            //const res = await axios.post('/api/signup',{name:name,email:email,password:password})
            console.log(res)
            if(res.ok){
                const form = e.target
                form.reset()
                window.alert("User account has been created")
            }
            else window.alert("Error in creating account")
        }
        catch(error){

        }

    }
  return (
    <div className='absolute top-0 left-0 w-full bg-indigo-50 h-screen  flex justify-center items-center'>
        <div className='w-[480px] p-8 bg-white rounded-2xl shadow-lg border-t-4 border-indigo-400'>
            <form onSubmit={(e)=>handleSubmit(e)} className='space-y-6'>
                <div>
                    <h2 className='text-4xl font-bold text-indigo-500'>Register</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className=''>Full name</label>
                    <input onChange={(e)=>setName(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='text' name='name' placeholder='Name'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className=''>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='text' name='email' placeholder='Email'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className=''>Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='password' name='password' placeholder='Password'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className=''>Confirm Password</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} className='border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300' type='password' name='confirm-password' placeholder='Confirm Password'></input>
                </div>
                <div className='flex justify-between w-full items-center gap-3'>
                    <span className=' text-red-400 text-sm p-1 rounded-lg'>{error}</span>
                    <button type='submit' className='bg-indigo-500 self-end rounded-lg py-2 px-8 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300'>Signup</button>
                </div>
                <div className='flex justify-end items-center gap-3'>
                    <Link className='text-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 p-1 rounded-lg' href='/login'>Already have an account? Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page