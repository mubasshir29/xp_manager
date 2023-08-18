import React from 'react'

const AddXP = () => {
  const currency = 'AED'
  return (
    <div className='w-full py-[15px]'>
      <div className='bg-white w-[520px] mx-auto p-8 rounded-xl'>
      <h2 className='text-2xl font-bold'>
          Add <span className='text-indigo-500'>Expense</span>
        </h2>
        <form className='flex flex-col gap-6 text-lg mt-4 py-4 text-slate-600'>
          <label className='flex flex-col gap-1  text-md'>
            Category
            <select className='p-2 bg-white border-2 border-indigo-100 rounded-lg text-xl'>
              <option value="Cash">Grocery</option>
              <option value="Cash">Food</option>
              <option value="Cash">Water</option>
            </select>
          </label>
          <label className='flex flex-col gap-1  text-md'>
            Label
            <input className='p-2 bg-white border-2 border-indigo-100 rounded-lg text-xl' placeholder='Ex: LuLu Shopping'></input>
          </label>
          <label className='flex flex-col gap-1 text-md'>
            Amount (in {currency})
            <input className='p-2 bg-white border-2 border-indigo-100 rounded-lg text-xl' placeholder='250'></input>
          </label>
          <label className='flex flex-col gap-1  text-md'>
            Payment
            <select className='p-2 bg-white border-2 border-indigo-100 rounded-lg text-xl'>
              <option value="Cash">Cash</option>
              <option value="Cash">Debit Card</option>
              <option value="Cash">Credit Card</option>
            </select>
          </label>
          <label className='flex flex-col gap-1 text-md'>
            Date
            <input className='p-2 bg-white border-2 border-indigo-100 rounded-lg' type='date'></input>
          </label>
          <button className='bg-gradient-to-tr from-indigo-500 to-indigo-700 mt-4 px-8 py-4 text-xl text-white rounded-lg self-center' type='submit'>Save</button>
        </form>
        
      </div>
        
    </div>
  )
}

export default AddXP