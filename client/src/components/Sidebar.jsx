import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

function Sidebar() {
    const headings = [
        {
          icon: <MdOutlineDashboard />,
          name: "Dashboard",
          path : "/dashboard"
        },
        {
          icon: <CiMoneyCheck1 />,
          name: "Income",
          path: "/income"
        },
        {
          icon: <FaHandHoldingUsd />,
          name: "Expense",
          path:"/expense"
        },
        {
          icon: <LuLogOut />,
          name: "Logout",
        },
      ];
  return (
    
         <div className="w-[25%] h-full">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[70px] h-[70px] rounded-full border border-gray-300 m-1"></div>
            <p className="font-bold text-sm">Name</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[90%] mt-4 ">
            {headings.map((header) => {
              return (
                <Link to={header?.path}>
                  <div className="flex flex-row gap-3 items-center justify-center py-3 px-14 hover:bg-purple-300 font-bold text-md rounded-xl">
                    {header.icon}
                    <p className="pl-4">{header.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div> 
 
  )
}

export default Sidebar