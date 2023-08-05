import React from 'react'

const TotalBalance = () => {
  return (
    <div className='bg-white relative h-[280px] w-[550px] z-0 overflow-hidden rounded-2xl p-8 shadow-md'>
      <div className='h-full'>
        <div className='flex w-full h-full items-center'>
          <div className='flex flex-col gap-6 w-[50%]'>
            <h2 className='font-bold text-2xl'>Total Ballance</h2>
            <div>
              <p className='text-emerald-400 font-bold text-xl'>+ $28</p>
              <p>Last transaction</p>
            </div>
            <div className='flex gap-1'>
              <button className='bg-indigo-600 text-white py-2 px-4 rounded-full'>TOP UP</button>
              <button className='border border-indigo-600 rounded-full py-2 px-4 text-indigo-600'>WITHDRAW</button>
            </div>
          </div>
          <div className='z-10 w-[50%] flex justify-end'>
            <div className='flex flex-col items-end pr-6'>
              <h1 className='text-white text-3xl font-bold'>$200</h1>
              <p className='text-white text-sm font-bold'>WALLET AMOUNT</p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className='bg-indigo-600 absolute z-1 w-[400px] h-[300px] rounded-full -top-[10px] -right-[150px]'></div>
    </div>
  )
}

export default TotalBalance