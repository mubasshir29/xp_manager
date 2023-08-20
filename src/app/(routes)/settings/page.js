'use client'
import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import Categories from '@/src/sample_data/categories.json'
import CategoryCard from '../../_components/CategoryCard'
import { useRouter, usePathname } from 'next/navigation'
import { getAllCategories } from '../../clientHelpers/categoryHelper'


const Settings = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [categories,setCategories] = useState()

    const getCategories = async () => {
      const data = await getAllCategories()
      setCategories(data)
    }
    useEffect(()=>{
      getCategories()
    },[])
  return (
    <div className='w-[640px] py-[15px]'>
      <div className='flex flex-col gap-12'>
      
        <div>
            <h2 className='font-bold text-2xl mb-2'>Categories</h2>
            {categories && (<div className='flex gap-2 flex-wrap'>
                {categories.map((category,index) => <div key={index}><CategoryCard category={category} /></div>)}
                <button onClick={()=>{router.push(`${pathname}/addCategory`)}} className='border border-indigo-500 px-8 py-1 rounded-lg'><span className='text-2xl text-indigo-500'>+</span></button>
            </div>)}
            
        </div>
      </div>
        
    </div>
  )
}

export default Settings