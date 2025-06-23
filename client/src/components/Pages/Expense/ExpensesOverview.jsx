import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import AreaGraph from '../../Graph/AreaGraph';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Calender from "../../../format/Calender";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
function ExpensesOverview({data}) {

  const [open, setOpen] = useState(false)
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
  
    const handleExpenseSubmit = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/v1/expense/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          category: category,
          amount : Number(amount),
          date,
          icon: "", 
        }),
      });
  
      if (response.ok) {
        setOpen(false);
        setCategory("");
        setAmount("");
        setDate("");
        window.location.reload();
      } else {
        console.error('Failed to add expense');
      }
    }
  return (

    <div className=" 'w-full h-[50%] shadow-lg mt-6 p-5' bg-white h-[50%] m-4 rounded-sm p-3">
      <div className="flex justify-between">
        <div >
          <p className='text-md  font-bold pb-2'>Expense OverView</p>
          <p className='text-sm text-[#525256] font-semibold pb-2'>Track your spending trends over time and gain insights into where your money goes.</p>
        </div>
        <span>
          <button className="text-sm bg-gray-200 px-3 py-1 flex items-center gap-1 font-semibold text-gray-600 rounded-sm border-gray-100"
           onClick={() => (setOpen(true))}>
            <GoPlus />
            Add Expense
          </button>
        </span>
      </div>
      <AreaGraph data={data}/>

      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>Add Expense</h1>

            <div className="flex flex-col gap-2 mt-4">
              <div>
                <p className="text-sm">Category</p>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder='Rent, Groceries, etc.'
                  className='text-sm border-2 border-gray-300 bg-gray-100 w-full mt-1 h-8 rounded p-2'
                  required
                />
              </div>
              <div>
                <p className="text-sm">Amount</p>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type='number'
                  placeholder=''
                  className='text-sm border-2 border-gray-300 bg-gray-100 w-full mt-1 h-8 rounded p-2'
                  required
                />
              </div>
              <div className="w-full">
                <Calender date={date} setDate={setDate} />
              </div>
              <div className="flex justify-end">
                <button className="bg-black w-[30%] text-white px-4 py-2 rounded mt-4"
                onClick={handleExpenseSubmit}
                >
                  Add Expense
                </button>
              </div>
            </div>

          </Box>
        </Modal>
      )}
    </div>
  )
}

export default ExpensesOverview