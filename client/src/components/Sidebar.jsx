import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import logo from '../assets/logo.svg'

function Sidebar() {
  // const headings = [
  //   {
  //     icon: <MdOutlineDashboard />,
  //     name: "Dashboard",
  //     path: "/dashboard"
  //   },
  //   {
  //     icon: <CiMoneyCheck1 />,
  //     name: "Income",
  //     path: "/income"
  //   },
  //   {
  //     icon: <FaHandHoldingUsd />,
  //     name: "Expense",
  //     path: "/expense"
  //   },
  //   {
  //     icon: <LuLogOut />,
  //     name: "Logout",
  //   },
  // ];
  return (


    <div className='w-[324px] bg-[#F8F7F1] h-full p-5'>
      <img src={logo} />
      <div className='my-6'>
        <p className='text-xl text-[#525256]'>Welcome back,</p>
        <p className='text-xl font-bold'> Vaishali!</p>
      </div>
          <Link to='/dashboard'>
            <div className='w-full h-[10%] bg-[#FDFDFD] rounded-sm flex flex-row gap-3 items-center justify-center mt-2'>
                <MdOutlineDashboard />
              <p className='text-sm p-6'>Dashboard</p>
            </div>
          </Link>

          <div className='w-full h-[30%] bg-[#FDFDFD] mt-2 p-6'>
            <div className='flex justify-between items-center text-sm'>
                 <p>Income</p>
                 <p className='text-[#525256]'>Jan 2025</p>
            </div>

          </div>
    </div>

  )
}

export default Sidebar