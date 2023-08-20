import Image from 'next/image'
import React from 'react'

const WalletCard = ({wallet}) => {
  return (
    <div className='relative w-[350px] h-[200px] shadow-md bg-gradient-to-tr from-indigo-400 to-indigo-800 rounded-xl p-8 flex justify-between'>
      <div className='flex flex-col gap-2 justify-center'>
        <h4 className='text-slate-200 font-bold text-lg'>{wallet.name}</h4>
        <h3 className='text-slate-200 text-base'>{wallet.type}</h3>
        { wallet.cardLastDigits && <p className='text-slate-200 text-sm'>xxxx xxxx xxxx {wallet.cardLastDigits}</p>}
        <h2 className='text-2xl text-slate-100 font-bold'>{wallet.currency} {wallet.balance}</h2>
      </div>
       
      <div className='flex justify-center items-center'>
        <Image src={wallet.imageUrl} width={100} height={100}/>
      </div>
    </div>
  )
}

export default WalletCard