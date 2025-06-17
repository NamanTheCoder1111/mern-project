import { useEffect, useState } from 'react';
import BarGraph from '../../Graph/BarGraph';
import Sidebar from '../../Sidebar';
import formatDate from '../../../format/formatDate';
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import RecentTransactions from '../RecentTransactions';
import FinOverView from '../FinOverView'


function Dashboard({data}) {

  return (
    <div className='h-[100vh] w-[100vw] flex '>
      <Sidebar data={data}/>
      <div className='bg-[#FFFFFF] p-5 h-[100vh] w-[75%] overflow-hidden'>
        <h1 className='text-3xl text-[#525256] mt-5'>Dashboard</h1>
        <div className="p-2 flex gap-4">
          <div className="bg-white w-[32%] h-780px] rounded-xl flex justify-center items-center gap-4 shadow-lg">
            <div className="h-[30px] w-[30px] bg-gray-400 rounded-full flex items-center justify-center">
              <PiShoppingBagOpen size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                Total Balance
              </p>
              <p className="text-md font-bold">${data?.totalBalance}</p>
            </div>
          </div>
          <div className="bg-white w-[32%] h-[80px] rounded-xl flex justify-center items-center gap-4 shadow-lg">
            <div className="h-[30px] w-[30px] bg-gray-400 rounded-full flex items-center justify-center">
              <CiMoneyCheck1 size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                Total Income
              </p>
              <p className="text-md font-bold">${data?.totalIncome}</p>
            </div>
          </div>
          <div className="bg-white w-[32%] h-[80px] rounded-xl flex justify-center items-center gap-4 shadow-lg">
            <div className="h-[30px] w-[30px] bg-gray-400 rounded-full flex items-center justify-between">
              <FaHandHoldingUsd size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                Total Expenses
              </p>
              <p className="text-md font-bold">${data?.totalExpenses}</p>
            </div>
          </div>
        </div>
        <div className='w-full h-[40%] shadow-lg mt-8 p-5'>
           <FinOverView/>
        </div>
        <div className='w-full h-[35%] shadow-lg mt-6 p-4'>
          {data && data.recentTransactions && <RecentTransactions data={data || []}/>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;