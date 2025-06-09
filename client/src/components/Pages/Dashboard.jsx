import React from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import RecentTransactions from "./RecentTransactions";
import FinOverView from "./FinOverView";
import Sidebar from "../Sidebar";

function Dashboard() {
  return (
    <div className="bg-white h-[100vh] absolute w-[100vw] overflow-hidden">
      <p className="text-3xl font-bold pt-8 pl-4">Expense Tracker</p>
      <div className="h-full w-full mt-4 flex ">
       <Sidebar/>
        <div className="w-[75%] h-full bg-gray-50">
          <div className="p-4 flex gap-4">
            <div className="bg-white w-[32%] h-[80px] rounded-xl flex justify-center items-center gap-4">
              <div className="h-[40px] w-[40px] bg-purple-700 rounded-full flex items-center justify-center">
                <PiShoppingBagOpen size={24} className="text-white"  />
              </div>
              <div>
                <p className="text-md text-gray-500 font-semibold">
                  Total Balance
                </p>
                <p className="text-xl font-bold">$79,100</p>
              </div>
            </div>
            <div className="bg-white w-[32%] h-[80px] rounded-xl flex justify-center items-center gap-4">
              <div className="h-[40px] w-[40px] bg-orange-500 rounded-full flex items-center justify-center">
                <CiMoneyCheck1 size={24} className="text-white" />
              </div>
              <div>
                <p className="text-md text-gray-500 font-semibold">
                  Total Income
                </p>
                <p className="text-xl font-bold">$79,100</p>
              </div>
            </div>
            <div className="bg-white w-[32%] h-[80px] rounded-xl flex justify-center items-center gap-4">
              <div className="h-[40px] w-[40px] bg-red-500 rounded-full flex items-center justify-between">
                <FaHandHoldingUsd  size={24} className="text-white" />
              </div>
              <div>
                <p className="text-md text-gray-500 font-semibold">
                  Total Expenses
                </p>
                <p className="text-xl font-bold">$79,100</p>
              </div>
            </div>
          </div>
          <div className="flex p-4 gap-4">
              <RecentTransactions/>
              <FinOverView/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
