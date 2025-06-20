import { FaArrowRight } from "react-icons/fa6";
import { HiArrowTrendingDown } from "react-icons/hi2";
import formatDate from "../../format/formatDate";

function RecentTransactions({data}) {

  return (
    <div className="w-full bg-white h-full p-4 rounded-xl overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-md font-semibold">Recent Transactions</h1>
        <button className="text-sm bg-gray-100 px-3 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100">
          See All
          <FaArrowRight />
        </button>
      </div>


    {
      data?.recentTransactions.map((txn) => (
              <div className="w-full flex justify-between items-center p-2">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] rounded-full bg-gray-100"></div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold">{txn?.type} </p>
            <p className="text-sm text-gray-400 font-semibold">
              {formatDate(txn?.date)}
            </p>
          </div>
        </div>
        <button className="bg-red-100 text-sm text-red-600 font-bold flex items-center gap-1 px-4 py-1 rounded-sm">
          <span>-${txn?.amount}</span>{" "}
          <HiArrowTrendingDown size={20} className="font-bold" />
        </button>
      </div>
      ))
    }
    </div>
  );
}

export default RecentTransactions;
