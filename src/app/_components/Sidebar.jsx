"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { MdSpaceDashboard, MdInsertDriveFile, MdWallet,MdArchive,MdOutlineHelp } from "react-icons/md";
import { BsFillBarChartFill, BsFillDatabaseFill,BsFillGearFill } from "react-icons/bs";



const Sidebar = () => {
  const router = useRouter()
  return (
    <div className='w-full h-screen p-4'>
    <div className='relative w-full bg-white rounded-xl h-full shadow-md flex flex-col gap-8 pt-8'>
        <h1 className='text-3xl text-center font-extrabold'>Track<span className='text-indigo-500'>XP</span></h1>
        <div className='self-start w-full flex flex-col'>
        <ul className='w-full flex flex-col gap-4 px-3'>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><MdSpaceDashboard/></span>Dashboard</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><MdInsertDriveFile/></span>Invoices</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><MdWallet/></span>Wallets</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><BsFillBarChartFill/></span>Reports</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><BsFillDatabaseFill/></span>Transactions</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><MdArchive/></span>Archives</li>
        </ul>
        <ul className='flex flex-col gap-4 py-4 border-t-2 border-slate-100 px-3'>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><BsFillGearFill/></span>Settings</li>
            <li className='pl-8 flex gap-2 p-2 justify-start text-slate-400 rounded-lg font-bold hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold'><span className='text-2xl'><MdOutlineHelp/></span>Help</li>
        </ul>
        
        <button onClick={()=>{router.push("/add-xp")}} className='border-2 border-indigo-400 bg-white hover:bg-indigo-400 text-indigo-500 hover:text-white font-bold self-center px-16 py-2 rounded-lg'>Add XP</button>
        </div>

        <div className='absolute group bottom-0 left-0 w-full bg-slate-100 hover:bg-indigo-100 p-4 flex gap-4 rounded-b-lg'>
          <div className='w-[50px] h-[50px] rounded-full bg-white'></div>
          <div>
            <h4 className='font-bold text-indigo-500'>Mubasshir Farooqui</h4>
            <p className='text-indigo-400'>Profile</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar