import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email , setEmail] = useState();
  const [password , setPassword ] = useState();
  const [shouldLogin , setShouldLogin ] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }

 
    useEffect(()=>{

      if (!shouldLogin) return; 
      
      const login = async ()=>{
        try {
        const response = await fetch('/api/v1/auth/login',{
          method : 'POST',
          headers : {'Content-Type' :  'application/json'},
          body: JSON.stringify({ email, password }),
        })
        if (!response.ok) {
          const { message } = await res.json();
          throw new Error(message || 'Login failed');
        }
      } catch (err) {
        setError(err.message);
      }
      finally {
        setShouldLogin(false);
        setEmail('')
        setPassword('')                              
      }
      }
      login()
     
    },[shouldLogin, email, password])
  

    const handleSubmit = (e)=>{
      e.preventDefault();
       setError('');
       setShouldLogin(true);
    }
 

 
  return (
    <div className='bg-white p-12 h-[100vh] absolute w-[100vw] '>
         <p className='text-3xl font-bold'>Expense Tracker</p>
         <div className='h-[80%] relative top-[20%] w-[50%]  '>
          <p className='text-3xl font-bold'>Welcome Back</p>
          <p className='text-xs font-bold text-gray-600'>Please enter your details login in </p>
          <form onSubmit={handleSubmit}>
          <div>
            <p className='text-sm font-bold text-gray-600 pt-4'>Email Address</p>
            <input type='email' value={email} onChange={handleEmailChange} className='border-2 border-gray-300 bg-gray-100 w-[70%] mt-3.5 h-12 rounded p-2 '/>
          </div>
          <div>
            <p className='text-sm font-bold text-gray-600 pt-4'>Password</p>
            <input type='password' value={password} onChange={handlePasswordChange} className='border-2 border-gray-300 bg-gray-100 w-[70%] mt-3.5 h-12 rounded p-2 '/>
          </div>
          <button className='text-xl bg-purple-400 text-white cursor-pointer font-bold rounded p-2 w-[70%] mt-3.5' type='submit'>Login</button>
          </form>
          <p className='text-sm font-bold pt-5'>Don't have Account ?<span className='text-purple-500 underline cursor-pointer' onClick={()=>navigate('/signup')}>SignUp</span></p>
         </div>

    </div>
  )
}

export default Login