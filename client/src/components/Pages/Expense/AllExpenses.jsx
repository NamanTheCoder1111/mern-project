import React from "react";
import { GoDownload } from "react-icons/go";
import { HiArrowTrendingDown } from "react-icons/hi2";

function AllExpenses() {
  return (
    <div className="bg-white h-[50%] m-4 rounded-sm p-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold ">All Expenses</h1>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100">
            <GoDownload />
            Download
          </button>
        </span>
      </div>

      <div className="w-[50%] flex justify-between items-center p-2">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] rounded-full bg-gray-100"></div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold">Shopping </p>
            <p className="text-sm text-gray-400 font-semibold">
              {" "}
              17th Feb 2025
            </p>
          </div>
        </div>
        <button className="bg-red-100 text-sm text-red-600 font-bold flex items-center gap-1 px-4 py-1 rounded-sm">
          <span>-$430</span>{" "}
          <HiArrowTrendingDown size={20} className="font-bold" />
        </button>
      </div>
    </div>
  );
}

export default AllExpenses;
