import React from 'react'

const TotlaSmallCards = () => {
  return (
    <div className='bg-white p-6 rounded-xl w-[265px] max-w-[270px] h-[150px] shadow-md'>
      <div className='flex flex-col gap-2'>
        <p className='text-slate-400 font-sm'>Total income</p>
        <h3 className='text-2xl font-bold'>AED 182.35</h3>
        <span className='px-4 py-1 rounded-full bg-emerald-100 self-start text-emerald-400  font-bold'>some</span>
      </div>
    </div>
  )
}

export default TotlaSmallCards