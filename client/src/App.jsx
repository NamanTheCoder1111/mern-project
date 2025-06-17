import { useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import Income from './components/Pages/Income/Income';
import Expense from './components/Pages/Expense/Expense';
import DashBoard from './components/Pages/Dashboard/index';

function App() {
  const [data,setData] = useState([])
    useEffect(()=>{
      const token = localStorage.getItem('token')
         fetch('/api/v1/dashboard',{
             method : 'GET',
             headers : {
              'Content-Type' : 'application/json',
              Authorization : `Bearer ${token}`
             }
         })
         .then((res) => res.json())
         .then((res) => (
          setData(res)
         ))
         .catch((err) =>{
          console.log('Error fetching Error :',err)
         })
    },[])


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard data={data}/>}/>
        <Route path='/income' element={<Income data={data}/>}/>
        <Route path='/expense' element={<Expense data={data}/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
