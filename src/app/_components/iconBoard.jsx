import React from 'react'
import IconTile from './IconTile'
import Image from 'next/image'
import bag from '@/src/app/icons/categoryIcons/bag-svgrepo-com.svg'
import airTicket from '@/src/app/icons/categoryIcons/air-ticket-svgrepo-com.svg'
import bankCard from '@/src/app/icons/categoryIcons/bank-card-svgrepo-com.svg'
import bbq from '@/src/app/icons/categoryIcons/bbq-svgrepo-com.svg'
import building from '@/src/app/icons/categoryIcons/building-svgrepo-com.svg'
import camera from '@/src/app/icons/categoryIcons/camera-svgrepo-com.svg'
import coconut from '@/src/app/icons/categoryIcons/coconut-tree-svgrepo-com.svg'
import compass from '@/src/app/icons/categoryIcons/compass-svgrepo-com.svg'
import goggles from '@/src/app/icons/categoryIcons/diving-goggles-svgrepo-com.svg'
import drinks from '@/src/app/icons/categoryIcons/drinks-svgrepo-com.svg'
import glasses from '@/src/app/icons/categoryIcons/glasses-svgrepo-com.svg'
import hat from '@/src/app/icons/categoryIcons/hat-svgrepo-com.svg'
import rail from '@/src/app/icons/categoryIcons/high-speed-rail-svgrepo-com.svg'
import balloon from '@/src/app/icons/categoryIcons/hot-air-balloon-svgrepo-com.svg'
import hotel from '@/src/app/icons/categoryIcons/hotel-svgrepo-com.svg'
import map from '@/src/app/icons/categoryIcons/map-svgrepo-com.svg'


const iconBoard = () => {
  return (
    <div>
        <div className='flex gap-2 flex-wrap'>
            <Image className='border border-slate-300 p-1 rounded-lg' src={bag} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={airTicket} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={bankCard} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={bbq} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={building} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={camera} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={coconut} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={compass} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={goggles} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={drinks} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={glasses} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={hat} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={rail} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={balloon} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={hotel} width={50} height={50}/>
            <Image className='border border-slate-300 p-1 rounded-lg' src={map} width={50} height={50}/>
        </div>
    </div>
  )
}

export default iconBoard