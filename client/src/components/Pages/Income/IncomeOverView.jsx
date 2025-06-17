import { GoPlus } from "react-icons/go";
import BarGraph from "../../Graph/BarGraph";

function IncomeOverView({ chartData }) {

  return (
    <div className=" 'w-full h-[50%] shadow-lg mt-6 p-5' bg-white h-[50%] m-4 rounded-sm p-3">
      <div className="flex justify-between">
        <div >
          <p className='text-md  font-bold pb-2'>Income OverView</p>
          <p className='text-sm text-[#525256] font-semibold pb-2'>Track your earnings over time and analyze your income trends</p>
        </div>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100">
            <GoPlus />
            Add Income
          </button>
        </span>
      </div>
      <BarGraph data={chartData} />
    </div>

  );
}

export default IncomeOverView;
