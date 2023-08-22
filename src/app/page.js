import Image from 'next/image'
import TotalBalance from './_components/TotalBalance'
import Report from './_components/SpendingThisMonth'
import TotlaSmallCards from './_components/TotalSmallCards'
import LastTransactions from './_components/LastTransactions'
import SpendingThisMonth from './_components/Report'

export default function Home() {
  return (
    <div className='flex flex-wrap'>


      <div className='w-[1160px] flex '>
        <div id='total-balance' className='w-[580px] px-[10px] py-[15px]'>
          <TotalBalance/>
        </div>
        <div id='report' className='w-[580px] px-[10px] py-[15px]'>
          <Report/>
        </div>
      </div>


      <div className='flex w-[1160px]'>
        <div className='w-[580px] max-w-[580px] flex justify-between px-[10px] py-[15px]'>
          <div id='total-income' className='w-[270px]'>
            <TotlaSmallCards/>
          </div>
          <div id='total-saves' className='w-[270px]'>
            <TotlaSmallCards/>
          </div>
        </div>
        <div className='w-[580px] flex justify-between  px-[10px] py-[15px]'>
          <div id='total-expences' className='w-[270px]'>
            <TotlaSmallCards/>
          </div>
          <div id='upcoming' className='w-[270px]'>
            <TotlaSmallCards/>
          </div>
        </div>
      </div>

      <div className='flex w-[1160px]'>
        <div id='last-transactions' className='w-[580px] px-[10px] py-[15px]'>
          <LastTransactions/>
        </div>
        <div id='month-spending' className='w-[580px] px-[10px] py-[15px]'>
         <SpendingThisMonth/>
        </div>
      </div>
      
    </div>
  )
}
