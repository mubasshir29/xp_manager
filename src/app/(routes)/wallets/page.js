'use client'
import React, { useEffect, useState } from 'react'
//import Cards from '@/src/sample_data/walletData.json'
import WalletCard from '../../_components/walletCard'
import { useRouter, usePathname } from 'next/navigation'
import { getAllWallets } from '../../clientHelpers/walletHelper'
import _ from 'underscore'
const Wallets = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [wallets,setWallets] = useState()
  const [allCurrencies,setAllCurrencies] = useState()
  const [currency,setCurrency] =  useState()

  const getWallets = async ()=>{
    const data = await getAllWallets()
    const currencyData = _.uniq(data.map(item => item.currency))
    //console.log(currencyData)
    setAllCurrencies(currencyData)
    setCurrency(currencyData[0])
    setWallets(data)
  }

  useEffect(()=>{
    getWallets()
  },[])
  return (
    
    <div className='w-[1160px] flex p-[15px]'>
      <div className=' w-full rounded-xlp-[15px]'>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <h1 className='text-3xl font-bold text-indigo-500'>Wallets</h1>
                <select onChange={(e)=>setCurrency(e.target.value)} className='bg-slate-100 border-2 border-slate-200 px-2 py-2 rounded-xl'>
                  {allCurrencies && allCurrencies.map((item,index) => <option key={index} value={item}>{item}</option>)}
                </select>
              </div>  
                
                <button onClick={()=>{router.push(`${pathname}/addWallet`)}} className='px-4 border rounded-full border-indigo-500 text-indigo-500'>Add New</button>
            </div>
            
            {wallets && (<div className='flex gap-8 mt-4 flex-wrap'>
            {wallets.map((wallet,index) => {
              if(wallet.currency == currency){
                return <WalletCard key={index}  wallet={wallet} />
              }
            })}
            </div>)}
            
        </div>
        
    </div>
  )
}

export default Wallets