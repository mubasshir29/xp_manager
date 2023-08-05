'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Budget',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(99 102 241)',
      },
      {
        label: 'Spent',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(165 180 252)',
      },
    ],
  };


const SpendingThisMonth = () => {
  return (
    <div className='bg-white relative h-[400px] w-[560px] z-0 overflow-hidden rounded-2xl p-8 shadow-md'>
      <div className='h-full flex flex-col gap-2'>
        <h2 className='text-xl font-bold text-black'>Report</h2>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default SpendingThisMonth