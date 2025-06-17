import React from "react";
import { GoDownload } from "react-icons/go";
import { HiArrowTrendingDown } from "react-icons/hi2";
import formatDate from "../../../format/formatDate";


function IncomeSource({ data }) {

  // const DowloadIncome = () => {
  //   const token = localStorage.getItem('token');
  //   fetch('/api/v1/income/downloadexcel', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user:', error);
  //     });
  // }

  return (
    <div className="bg-white h-[40%] m-4 rounded-sm p-4 overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold ">Income Sources</h1>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100"
            onClick={DowloadIncome}
          >
            <GoDownload />
            Download
          </button>
        </span>
      </div>


      {
        data.map((data) => (
          <div className="w-[50%] flex justify-between items-center p-2">
            <div className="flex gap-2">
              <div className="h-[50px] w-[50px] rounded-full bg-gray-100">
                {data?.icon}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">{data?.source} </p>
                <p className="text-sm text-gray-400 font-semibold">
                  {" "}
                  {formatDate(data?.date)}
                </p>
              </div>
            </div>
            <button className="bg-green-100 text-sm text-green-600 font-bold flex items-center gap-1 px-4 py-1 rounded-sm">
              <span>-${data?.amount}</span>{" "}
              <HiArrowTrendingDown size={20} className="font-bold" />
            </button>
          </div>
        ))
      }


    </div>
  );
}

export default IncomeSource;
