import React from "react";
import { GoPlus } from "react-icons/go";

function IncomeOverView() {
  return (
    <div className="bg-white h-[50%] m-4 rounded-sm p-3">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold ">Income Overview</h1>
          <p className="text-sm text-gray-400 font-bold">
            Track your earnings over time and analyse your income trends.
          </p>
        </div>
        <span>
          <button className="text-sm bg-purple-200 px-3 py-1 flex items-center gap-1 font-semibold text-purple-600 rounded-sm border-gray-100">
            <GoPlus />
            Add Income
          </button>
        </span>
      </div>
    </div>
  );
}

export default IncomeOverView;
