import { useEffect, useState } from "react";
import Sidebar from "../../Sidebar";
import IncomeOverView from "./IncomeOverView";
import IncomeSource from "./IncomeSource";
import formatDate from "../../../format/formatDate";

function Income({data}) {
  const [incomeData, setIncomeData] = useState([])
    useEffect(() => {
      fetchIncomeData()
    }, [])
  
    const fetchIncomeData = async () => {
      const token = localStorage.getItem('token');
      fetch('/api/v1/income/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setIncomeData(data)
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    };

     const aggregateSalaries = (data) => {
    return data?.reduce((acc, { amount, date }) => {
      const formatted = formatDate(date);
      acc[formatted] = (acc[formatted] || 0) + amount;
      return acc;
    }, {});
  };

  const aggregatedData = aggregateSalaries(incomeData);
  const chartData = Object.entries(aggregatedData).map(([name, salary]) => ({ name, salary }));
  return (
    <div className="bg-white  absolute w-[100vw] h-[100vh] overflow-hidden">
      <div className="h-full w-full mt-4 flex ">
        <Sidebar data={data}/>
        <div className="w-[75%] h-full bg-gray-50 flex flex-col">
          <IncomeOverView chartData={chartData} />
          <IncomeSource  data={incomeData}/>
        </div>
      </div>
    </div>
  );
}

export default Income;
