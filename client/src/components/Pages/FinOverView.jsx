import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function FinOverView() {
  return (
    <div className="w-[50%] bg-white h-full p-4 rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-md font-semibold">Financial Overview</h1>
        <button className="text-sm bg-gray-100 px-3 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100">
          See All
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default FinOverView;
