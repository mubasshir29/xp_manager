import React from 'react'

const WalletCard = ({wallet}) => {
  return (
    <div className='w-[384px] bg-gradient-to-tr from-indigo-700 via-indigo-500 to-indigo-900 rounded-xl p-8 flex flex-col gap-2'>
       <h3 className='text-white text-base'>{wallet.type}</h3>
       <h4 className='text-white font-bold text-xl'>{wallet.walletName}</h4>
       {wallet.cardLastDigits && <p className='text-white text-sm'>xxxx xxxx xxxx {wallet.cardLastDigits}</p>}
       <h2 className='text-2x text-yellow-200 font-bold'>Balance: {wallet.balanceAmount}</h2>
    </div>
  )
}

export default WalletCard