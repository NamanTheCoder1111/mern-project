import { useState} from 'react'
import './App.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import Income from './components/Pages/Income/Income';
import Expense from './components/Pages/Expense/Expense';
import DashBoard from './components/Pages/Dashboard/index';

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Loading...');


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/expense' element={<Expense/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
