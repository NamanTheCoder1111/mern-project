import React from "react";
import { GoDownload } from "react-icons/go";
import { HiArrowTrendingDown } from "react-icons/hi2";
import formatDate from "../../../format/formatDate";

function AllExpenses({ data }) {


  const downloadExpense = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/v1/expense/downloadexcel', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a')
      a.href = url;
      a.download = 'expense_details.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading expense data:', error)
    }
  }


  return (
    <div className="bg-white h-[50%] m-4 rounded-sm p-3 overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold ">All Expenses</h1>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100"
            onClick={downloadExpense}>
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
                <p className="text-sm font-bold">{data?.category} </p>
                <p className="text-sm text-gray-400 font-semibold">
                  {" "}
                  {formatDate(data?.date)}
                </p>
              </div>
            </div>
            <button className="bg-red-100 text-sm text-red-600 font-bold flex items-center gap-1 px-4 py-1 rounded-sm">
              <span>-${data?.amount}</span>{" "}
              <HiArrowTrendingDown size={20} className="font-bold" />
            </button>
          </div>
        ))
      }

    </div>
  );
}

export default AllExpenses;
