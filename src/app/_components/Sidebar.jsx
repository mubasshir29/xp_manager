import React from 'react'
import { MdSpaceDashboard, MdInsertDriveFile, MdWallet,MdArchive,MdOutlineHelp } from "react-icons/md";
import { BsFillBarChartFill, BsFillDatabaseFill,BsFillGearFill } from "react-icons/bs";



const Sidebar = () => {
  return (
    <div className='w-full h-screen p-4'>
    <div className='w-full bg-white rounded-xl h-full shadow-md flex flex-col gap-8 py-8'>
        <h1 className='text-3xl text-center font-extrabold'>Track<span className='text-indigo-500'>XP</span></h1>
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
    </div>
    </div>
  )
}

export default Sidebar