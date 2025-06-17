import React from 'react'
import { GoPlus } from "react-icons/go";
import AreaGraph from '../../Graph/AreaGraph';


function ExpensesOverview({data}) {
  return (

    <div className=" 'w-full h-[50%] shadow-lg mt-6 p-5' bg-white h-[50%] m-4 rounded-sm p-3">
      <div className="flex justify-between">
        <div >
          <p className='text-md  font-bold pb-2'>Expense OverView</p>
          <p className='text-sm text-[#525256] font-semibold pb-2'>Track your spending trends over time and gain insights into where your money goes.</p>
        </div>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100">
            <GoPlus />
            Add Expense
          </button>
        </span>
      </div>
      <AreaGraph data={data}/>
    </div>
  )
}

export default ExpensesOverview