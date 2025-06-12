import React, { useEffect, useState } from 'react'
import logo from '../../../assets/logo.svg'
import Sidebar from '../../Sidebar';

function Dashboard() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/auth/getUser', {
      method: 'GET',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("data",data)
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, []);

  const istrue = false;

  return (
      <div className='h-[100vh] w-[100vw]'>
              {/* <div className='w-[324px] bg-[#F8F7F1] h-full p-5'>
                <img src={logo}/>
                <div className='my-6'>
                  <p className='text-xl text-[#525256]'>Welcome back,</p>
                  <p className='text-xl font-bold'> Vaishali!</p>
                </div>
                <div className='w-full h-[10%] bg-[#FDFDFD] rounded-sm'>
                    <p className='text-sm p-6'>Dashboard</p>
                </div>
                     
              </div> */}
              <Sidebar/>
              <div className='bg-[#FFFFFF] '>
                   {
                    istrue ? console.log("Shruti") : console.log("Not")
                   }
              </div>
      </div>
  )
}

export default Dashboard ;