'use client'
import React, { useState } from 'react'

const AddWallet = () => {
    const [wallet,setWallet] = useState({
        type:"",
        name:"",
        initialAmount:Number,
        color:"",
        currency:"",
        icon:"",
    })
  return (
    <div className='w-full py-[15px]'>
        <div className='w-[520px] mx-auto p-8 bg-white rounded-xl'>
            <h2 className='text-2xl font-bold'>Add Wallet</h2>
        <form className='mt-4 appearance-none space-y-4'>
            <div className='flex flex-col gap-2'>
                <label>Type</label>
                <select className='px-4 py-2 border border-slate-200 rounded-lg'>
                    <option>Cash</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Name</label>
                <input className='px-4 py-2 border border-slate-300 rounded-lg' type='text' placeholder='Ex: Monthly Budget'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Initial Amount</label>
                <input className='px-4 py-2 border border-slate-300 rounded-lg' type='text' placeholder='AED 0'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Color</label>
               <select className='px-4 py-2 border border-slate-200 rounded-lg'>
                <option value="#ef5350"><div className='w-12 h-4 bg-indigo-500'></div></option>
                <option value="#ab47bc"><div className='w-12 h-4 bg-indigo-500'></div></option>
                <option value="#64b5f6"><div className='w-12 h-4 bg-indigo-500'></div></option>
                <option value="#ab47bc"><div className='w-12 h-4 bg-indigo-500'></div></option>
               </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Image</label>
               <input className='px-4 py-2 border border-slate-300 rounded-lg' type='file'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Currency</label>
               <select className='px-4 py-2 border border-slate-200 rounded-lg'>
                <option >AED</option>
                <option >INR</option>
                <option >USD</option>
                <option >SAR</option>
               </select>
            </div>

            <div className='flex justify-center p-4'>
                <button className='bg-indigo-500 rounded-lg text-white px-8 py-2'>Save</button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default AddWallet