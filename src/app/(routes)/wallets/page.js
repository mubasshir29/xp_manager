'use client'
import React, { useEffect, useState } from 'react'
//import Cards from '@/src/sample_data/walletData.json'
import WalletCard from '../../_components/walletCard'
import { useRouter, usePathname } from 'next/navigation'
import { getAllWallets } from '../../clientHelpers/walletHelper'

const Wallets = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [wallets,setWallets] = useState()

  const getWallets = async ()=>{
    const data = await getAllWallets()
    setWallets(data)
  }

  useEffect(()=>{
    getWallets()
  },[])
  return (
    
    <div className='w-[1160px] flex p-[15px]'>
      <div className=' w-full rounded-xlp-[15px]'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold text-indigo-500'>Wallets</h1>
                <button onClick={()=>{router.push(`${pathname}/addWallet`)}} className='px-4 border rounded-full border-indigo-500 text-indigo-500'>Add New</button>
            </div>
            
            {wallets && (<div className='flex gap-8 mt-4 flex-wrap'>
            {wallets.map((wallet,index) => <WalletCard key={index}  wallet={wallet} />)}
            </div>)}
            
        </div>
        
    </div>
  )
}

export default Wallets