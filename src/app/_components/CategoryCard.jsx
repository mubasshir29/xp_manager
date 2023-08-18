import Image from 'next/image'
import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <div className='flex gap-2 bg-indigo-500 pl-3 pr-4 py-2 text-white rounded-lg items-center'>
        <div className='h-[30px] w-[30px] relative'>
            <Image className='contain p-1' layout='fill' objectFit='cover' src={category.icon} />
        </div>
        <h3>{category.name}</h3>
    </div>
  )
}

export default CategoryCard