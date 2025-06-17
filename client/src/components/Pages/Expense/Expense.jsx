import React, { useEffect, useState } from "react";
import ExpensesOverview from "./ExpensesOverview";
import AllExpenses from "./AllExpenses";
import Sidebar from "../../Sidebar";
import formatDate from "../../../format/formatDate";

function Expense({data}) {

  const [expenseData, setExpenseData] = useState([])

  useEffect(()=>{
    fetchExpenseData()
  },[])

   const fetchExpenseData = async () => {
    const token = localStorage.getItem('token');
    fetch('/api/v1/expense/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setExpenseData(data)
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

  const aggregatedData = aggregateSalaries(expenseData);
  const chartData = Object.entries(aggregatedData).map(([name, salary]) => ({ name, salary }));

  return (
    <div className="bg-white absolute w-[100vw] h-[100vh]">
      <div className="h-full w-full mt-4 flex ">
        <Sidebar data={data}/>
        <div className="w-[75%] h-full bg-gray-50 flex flex-col">
          <ExpensesOverview data={chartData}/>
          <AllExpenses data={expenseData} />
        </div>
      </div>
    </div>
  );
}

export default Expense;
