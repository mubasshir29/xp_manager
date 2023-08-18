'use client'
import React, { useState } from 'react'

const AddCategory = () => {
    const [category,setCategory] = useState()
  return (
    <div className='w-full py-[15px]'>
        <div className='w-[520px] mx-auto p-8 bg-white rounded-xl'>
            <h2 className='text-2xl font-bold'>Add Category</h2>
        <form className=' space-y-6 mt-4'>
            <div className='flex flex-col gap-2'>
                <label>Name</label>
                <input className='p-2 border border-slate-200 rounded-lg' type='text' placeholder='Category name'></input>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Icon</label>
                <input className='p-2 border border-slate-200 rounded-lg' type='file'></input>
            </div>
            <div className='flex justify-center p-2'>
                <button className='px-8 py-2 bg-indigo-500 text-white rounded-lg'>Save</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddCategory