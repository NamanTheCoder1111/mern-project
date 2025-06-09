import React from "react";
import ExpensesOverview from "./ExpensesOverview";
import AllExpenses from "./AllExpenses";
import Sidebar from "../../Sidebar";

function Expense() {
  return (
    <div className="bg-white h-[100vh] absolute w-[100vw] overflow-hidden">
      <p className="text-3xl font-bold pt-8 pl-4">Expense Tracker</p>
      <div className="h-full w-full mt-4 flex ">
        <Sidebar/>
        <div className="w-[75%] h-full bg-gray-50 flex flex-col">
          <ExpensesOverview/>
          <AllExpenses/>
        </div>
      </div>
    </div>
  );
}

export default Expense;
