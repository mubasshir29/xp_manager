'use client'
import React, { useState } from 'react'
import IconBoard from '@/src/app/_components/iconBoard'
import {addCategory} from '@/src/app/clientHelpers/categoryHelper'
import { useRouter, usePathname } from 'next/navigation'

const AddCategory = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [category,setCategory] = useState({
        name:""
    })

    const onValueChange = (e) =>{
        setCategory((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        const response = await addCategory(category)
        if(response.status == true){
            window.alert(response.msg)
            router.back()
        }
    }
  return (
    <div className='w-full py-[15px]'>
        <div className='w-[520px] mx-auto p-8 bg-white rounded-xl'>
            <h2 className='text-2xl font-bold'>Add Category</h2>
        <form onSubmit={(e)=>onSubmit(e)} className=' space-y-6 mt-4'>
            <div className='flex flex-col gap-2'>
                <label>Name</label>
                <input name='name' onChange={(e)=>onValueChange(e)} className='p-2 border border-slate-200 rounded-lg' type='text' placeholder='Category name'></input>
            </div>
            {/* <div className='flex flex-col gap-2'>
                <label>Icon</label>
                <input className='p-2 border border-slate-200 rounded-lg' type='file'></input>
                <div>
                    <IconBoard/>
                </div>
            </div> */}
            <div className='flex justify-center p-2'>
                <button type='submit' className='px-8 py-2 bg-indigo-500 text-white rounded-lg'>Save</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddCategory