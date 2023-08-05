import React from 'react'
import Transactions from './../../sample_data/transactions.json'

const LastTransactions = () => {
    //console.log(Transactions)
    const transactionsLatest = (Transactions.reverse().slice(0,5))
  return (
    <div className='bg-white relative h-[400px] w-[560px] z-0 overflow-hidden rounded-2xl py-6 px-8 shadow-md'>
      <div className='h-full'>
        <h2 className='text-xl font-bold text-black'>Last 5 Transactions</h2>
        <ul className='w-full flex flex-col justify-center gap-3 py-2 mt-2'>
            {transactionsLatest.map(transaction => (
                <li className='flex w-full items-center justify-between'>
                    <div className='flex-1 flex justify-start items-center'>
                        <div className='w-[50px] h-[50px] bg-slate-400 rounded-full'>

                       </div>
                    </div>
                    
                    <div className='w-[70%] flex flex-col text-slate-700'>
                        <h2 className='text-lg font-bold'>{transaction.label}</h2>
                        <h3 className='text-slate-400'>{transaction.category}</h3>
                    </div>
                    <div className='w-[10%]'>
                        <p className='text-xl font-bold text-red-500'>${transaction.amount}</p>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default LastTransactions