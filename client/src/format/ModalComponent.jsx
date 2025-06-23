
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Calender from './Calender';

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


function ModalComponent({  open, setOpen, incomeSource, setIncomeSource, amount, setAmount, date, setDate, handleIncomeSubmit }) {
    return(
        <div>
            <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>Add Income</h1>

            <div className="flex flex-col gap-2 mt-4">
              <div>
                <p className="text-sm">Income Source</p>
                <input
                  value={incomeSource}
                  onChange={(e) => setIncomeSource(e.target.value)}
                  placeholder='Enter Income Source'
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
                onClick={handleIncomeSubmit}
                >
                  Add Income
                </button>
              </div>
            </div>

          </Box>
        </Modal>
        </div>
    )
}


export default ModalComponent;