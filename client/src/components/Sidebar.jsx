import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import logo from '../assets/logo.svg'

function Sidebar({ data }) {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    fetch('/api/v1/auth/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, []);


  return (


    <div className='w-[324px] bg-[#F8F7F1] h-[100vh] p-5'>
      <img src={user?.profileImageUrl} alt="Profile" className='h-[20px] w-[20px]' />
      <div className='my-6'>
        <p className='text-xl text-[#525256]'>Welcome back,</p>
        <p className='text-xl font-bold'> {user?.fullName}!</p>
      </div>
      <Link to='/dashboard'>
        <div className='w-full h-[10%] bg-[#FDFDFD] rounded-sm flex flex-row gap-3 items-center justify-center mt-2'>
          <MdOutlineDashboard />
          <p className='text-sm p-6'>Dashboard</p>
        </div>
      </Link>

      <Link to='/income'>
        <div className='w-full h-[25%] bg-[#FDFDFD] mt-4 p-6'>
          <div className='flex justify-between items-center text-sm'>
            <p>Income</p>
            <div className='text-[#525256] bg-[#F4F5F7] p-2'>Jan 2025</div>
          </div>
          <div className="border-t-2 border-dotted border-[#A3A3A333] w-full my-4"></div>
          <div className='mt-2'>
            <p className='text-xl text-[#525256]'>₹ {data.totalIncome}</p>
            <p className='text-sm mt-2'>compared to ₹ {data.last60DaysIncome?.total} last 2 month</p>
          </div>
        </div>
      </Link>


      <Link to='/expense'>
        <div className='w-full h-[25%] bg-[#FDFDFD] mt-4 p-6'>
          <div className='flex justify-between items-center text-sm'>
            <p>Expense</p>
            <div className='text-[#525256] bg-[#F4F5F7] p-2'>Jan 2025</div>
          </div>
          <div className="border-t-2 border-dotted border-[#A3A3A333] w-full my-4"></div>
          <div className='mt-2'>
            <p className='text-xl text-[#525256]'>₹ {data?.totalExpenses}</p>
            <p className='text-sm mt-2'>compared to ₹ {data.last30DaysExpenses?.total} last month</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Sidebar