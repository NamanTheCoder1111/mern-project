import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import Dashboard from './components/Pages/Dashboard';
import Income from './components/Pages/Income/Income';
import Expense from './components/Pages/Expense/Expense';

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
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/expense' element={<Expense/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
