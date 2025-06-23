    import { useState } from 'react';
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for styling

    function Calender({date,setDate}) {
    //   const [selectedDate, setSelectedDate] = useState(null);

      return (
        <div className='w-full'>
          <p className="text-sm">Date</p>
          <DatePicker
            
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MM/dd/yyyy" // Customize date format
            
            placeholderText="dd/mm/yyyy"
            className='text-sm border-2 border-gray-300 bg-gray-100 w-full mt-1 h-8 rounded p-2'
          />
        </div>
      );
    }

    export default Calender;